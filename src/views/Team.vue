<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
        
      <v-layout row wrap>
        <v-flex xs12 sm6 md 4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="hrey-text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>

    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      team: [
        { name: 'John Doe', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Miles Morales', role: 'Graphics designer', avatar: '/avatar-2.png' },
        { name: 'Clark Kent', role: 'Software Engineer', avatar: '/avatar-3.png' },
        { name: 'Peter Parker', role: 'Web developer', avatar: '/avatar-4.png' }
      ]
    }
  }
}
</script>
