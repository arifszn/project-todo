<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    
    <v-container class="my-5">
        <v-expansion-panel>
          <v-expansion-panel-content v-for="project in myProjects" :key="project.id">
            <div slot="header">{{ project.title }}</div>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb' //@ means root

export default {
  data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'John Doe'
      })
    }
  },
    created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(element => {
        if (element.type === 'added') {
          this.projects.push({
            ...element.doc.data(),
            id: element.doc.id
          })
        } 
      });
    })
  }
}
</script>
