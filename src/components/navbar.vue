<template>
   <nav class="grey lighten-4">

        <v-snackbar
        v-model="snackbar"
        :timeout="4000" top color="success"
        >
        Your Project Has Been Added

        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>

       <v-app-bar flat app >
           <v-app-bar-nav-icon class="grey--text" v-on:click="drawer =!drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="text-uppercase grey--text">
               <span class="font-weight-light">Todo</span>
               <span>List</span>
           </v-toolbar-title>
            <v-spacer><!-- takes all the available room --></v-spacer> 
      
    <v-menu offset-y> 
       <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="grey"
          text
          v-bind="attrs"
          v-on="on"
        >
         <v-icon left>mdi-chevron-down</v-icon> 
         <span>Menu</span>
        </v-btn>
       </template>
       <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route" class="indigo--text">
                <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
           <v-btn text color="grey">
           <span> Sign Out </span>
           <v-icon right>mdi-login</v-icon>
           </v-btn>

       </v-app-bar>
       <v-navigation-drawer v-model="drawer" app class="primary" > 
           <v-layout column align-center>
               <v-flex class="mt-5">
                   <v-avatar size="100">
                       <img src="/niranjan.jpg" alt="">
                   </v-avatar>
                   <p class="white--text subheading mt-1">Niranjan Shah</p>
                </v-flex>
                <v-flex class="mt-4 mb-3 ">
                    <pop-up @projectAdded="snackbar= true"/>
                </v-flex>
           </v-layout>
           <v-list>
               <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
                   <v-list-item-icon>
                       <v-icon class="white--text">{{link.icon}}</v-icon>
                   </v-list-item-icon>
                   <v-list-item-content>
                       <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                   </v-list-item-content>
                   
               </v-list-item>
           </v-list>
       </v-navigation-drawer>
      
   </nav>
</template>

<script>
import popup from './popup'
export default {
    data(){
        return{
            drawer:false,
            links: [
                {icon: 'mdi-view-dashboard', text:'Dashboard',route:'/'},
                {icon: 'mdi-folder', text:'My Projects',route:'/projects'},
                {icon: 'mdi-account-supervisor', text:'Team',route:'/team'},
            ],
            snackbar:false
        }
    },
    components:{"pop-up":popup
    }
}
</script>

<style>
.active-text{
    color:royalblue;
}
</style>