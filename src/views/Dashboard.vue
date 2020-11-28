<template>
  <div class="home">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">

          <v-tooltip top>
            <template v-slot:activator="{on, attrs}">
              <v-btn v-bind="attrs" v-on="on" small text color="grey" v-on:click="sortBy('title')" >
                <v-icon left small>mdi-folder</v-icon>
                <span class="caption text-lowercase">By project name</span>
              </v-btn>
            </template>
            <span small> Sort projects by project name</span>
          </v-tooltip>
         <v-tooltip top>
            <template v-slot:activator="{on, attrs}">
              <v-btn small text color="grey" v-on:click="sortBy('person')" v-bind="attrs" v-on="on">
                <v-icon left small>mdi-account-supervisor</v-icon>
                <span class="caption text-lowercase">By person</span>
              </v-btn>
            </template>
            <span small> Sort projects by person name </span>
          </v-tooltip>
      </v-layout>
      <v-card flat  v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 ml-0 project ${project.status}`">
            <v-flex xs12 md6 >
              <div class="caption grey--text">Project Title </div> 
              <div> {{project.title}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person </div> 
              <div> {{project.person}}</div>
            </v-flex>
             <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Due </div> 
              <div> {{project.due}}</div>
            </v-flex>
            <v-flex xs2 sm4 md2>
              
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
              
            </v-flex>
        </v-layout>  
        <v-divider></v-divider>
      </v-card>
      
    </v-container>
       <!-- 12-grid layout 
         <v-layout row>
         <v-flex xs12 md6>
           <v-btn outlined block color="primary">1</v-btn>
         </v-flex>
         <v-flex xs4 md2>
           <v-btn outlined block color="primary">2</v-btn>
           
         </v-flex>
          <v-flex xs4 md2>
           <v-btn outlined block color="primary">3</v-btn>
           
         </v-flex>
          <v-flex xs4 md2>
           <v-btn outlined block color="primary">4</v-btn>
           
         </v-flex>

       </v-layout>
       <v-layout row justify-space-around>
         <v-flex xs4 md3>
           <v-btn outlined block color="success">1</v-btn>
         </v-flex>
         <v-flex xs4 md3>
           <v-btn outlined block color="success">2</v-btn>
         </v-flex>
      
       </v-layout> -->
    
    <!-- Buttons and Icons -->
    <!-- <v-btn class="blue white--text"> Click me </v-btn>
    <v-btn depressed dark color="blue ml-4" >Depressed </v-btn>
    <v-btn text color="blue" >Text </v-btn>
    <v-btn color="blue">
      <v-icon  large color="white">mdi-email</v-icon>
      <span class="white--text"> Email Me</span>
    </v-btn>
      <v-btn fab color="red" class="ml-4">
      <v-icon  large color="white" >mdi-heart</v-icon>
    </v-btn> -->

    <!-- Breakpoints -->
    <!-- <v-btn class="hidden-md-and-down">Click Me</v-btn> -->
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      projects: []
    }
  },
  methods:{
    sortBy(property){
      this.projects.sort((a,b)=>{
       return a[property] < b[property]? -1:1
      }
      )
    }

  },
  created(){
    db.collection('project').onSnapshot(res=>{
      const changes = res.docChanges()
      console.log(changes)
      changes.forEach(element => {
        if (element.type === 'added'){
          this.projects.push({
            ...element.doc.data(),
            id: element.doc.id
          })
        }
      });
    })
    console.log(this.projects)
  }
}
</script>
<style scoped>
.project.complete{
  border-left:4px solid #3cd1c2;
}
.project.ongoing{
  border-left:4px solid orange;
}
.project.overdue{
  border-left:4px solid tomato;
}

.theme--light.v-chip.complete:not(.v-chip--active)  {
    background: #3cd1c2;
  }

  .theme--light.v-chip.ongoing:not(.v-chip--active) {
    background: orange;
  }

  .theme--light.v-chip.overdue:not(.v-chip--active) {
    background: tomato
  }
</style>
