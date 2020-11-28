<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>
    <!-- <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row> -->
    <v-container class="my-5">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
           <v-expansion-panel-header>{{project.title}}
             <v-flex  xs2 >
             <v-chip  :class="`${project.status} white--text caption  ml-4`">{{project.status}}</v-chip>
             </v-flex>
           </v-expansion-panel-header>
          <v-expansion-panel-content>
                <div class="grey--text">
                <div class="font-weight-bold"> {{project.due}}</div>
                <div>{{project.content}}</div>
                </div>
          </v-expansion-panel-content>
         
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'
export default {
  name: 'Project',
  components: {
    
  },
  data(){
    return{
       projects: []
    }
  },
  computed:
  {
    myProjects(){
      return this.projects.filter(project =>{
          return project.person =="Niranjan Shah"
      })
    }
  },
    created(){
    db.collection('project').onSnapshot(res=>{
      const changes = res.docChanges()
     
      changes.forEach(element => {
        if (element.type === 'added'){
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
<style scoped>
.theme--light.v-chip.complete:not(.v-chip--active)  {
    background: #3cd1c2;
    width:'20px'
  }

  .theme--light.v-chip.ongoing:not(.v-chip--active) {
    background: orange;
  }

  .theme--light.v-chip.overdue:not(.v-chip--active) {
    background: tomato
  }

  
</style>
