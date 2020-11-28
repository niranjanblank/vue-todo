<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="button-background white--text"
          v-bind="attrs"
          v-on="on"
          text
        >
          Add new project
        </v-btn>
      </template>
      <v-card>
          <v-card-title>
              <h2  class="button-container ">Add a New Project</h2>
          </v-card-title>
          <v-card-text>
              <v-form class="px-3" ref="form">
                  <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules['inputField']"></v-text-field>
                  <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules['inputField']"></v-textarea>
                  <v-menu  max-width="290px" min-width="290px">
                      <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            :value="formattedDate"
                            clearable
                            label="Due date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            @click:clear="date = null"
                            prepend-icon="mdi-calendar-range-outline"
                            :rules="inputRules['dateField']"
                            >
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="due" ></v-date-picker>
                  </v-menu>
                  <div class="button-container">
                  <v-btn text dark  class="button-background" @click="submit()" :loading="loading"> Add project</v-btn>
                  </div>
                
              </v-form>
          </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>
import db from '@/fb'

export default {
    data(){
        return{
            title:'',
            content:'',
            due:'',
            inputRules: 
                 {inputField : [v => v.length >=3 || 'Minimum Length is 3 characters'],
                 dateField : [v => v.length >=3 || 'Please select the date'] },
            loading: false,
            dialog: false
            
        }
    },
    methods:{
        submit() {
            if(this.$refs.form.validate()){
                // console.log(this.title,this.content)
                // console.log(typeof(this.due))
                    this.loading = true;

                const project  = {
                    title: this.title,
                    content: this.content,
                    due: new Date(this.due).toUTCString().substring(0,16),
                    person: 'Niranjan Shah',
                    status: 'ongoing'
                }

                db.collection('project').add(project).then(()=>{
                    console.log('added to db')
                    this.loading= false
                    this.dialog = false
                    this.$emit('projectAdded')
                })
            }
                
               
        },
       
    },
    computed: {
         formattedDate(){
            return this.due ? new Date(this.due).toUTCString().substring(0,16) : ''
        }
    }
    
}
</script>
<style scoped>

.button-background{
    background:#3cd1c2;
}
.button-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width:100%;
 
}
</style>