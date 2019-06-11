<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn class="success" flat slot="activator">Add new project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                    <v-menu>
                        <v-text-field :value="formattedDate" slot="activator" label="Due date" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="isLoading">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum legth is 3 characters'
            ],
            isLoading: false,
            dialog: false
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()) {
                this.isLoading = true;
                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(this.due, 'Do MMM YYYY'),
                    person: 'John Doe',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    console.log('added to db');
                    this.isLoading = false;
                    this.dialog = false;
                    this.$emit('projectAdded')
                })
            }
            
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(this.due, 'Do MMM YYYY') : ""
        }
    }
}
</script>

