<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-sm-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="120">
                <img :src="person.avatar" alt="">
                </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
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
// @ is an alias to /src

export default {
  name: 'Team',
  components: {
    
  },
  data(){
    return{
      team: [
        {name: 'Niranjan Shah', role: 'Developer',avatar:'/niranjan.jpg'},
        {name: 'Qin Wentian', role:'Tester',avatar:'/qin.jpg'},
        {name: 'Meng Hao', role:'Team Lead',avatar:'/meng.jpg'},
        {name: 'Li Qiye', role:'Program Manager',avatar:'/li.jpg'},
        {name: 'Wang Lin', role:'Tester',avatar:'/wang.png'},
      ]
    }
  }
}
</script>
<style scoped>

</style>
