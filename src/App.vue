<template>
  <v-app  >
    <div class="grey lighten-4 app_main">
    <nav-bar/>
    <v-main class="grey lighten-4 mx-4 mb-4">
      
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-main>
    </div>
  </v-app>
</template>

<script>

import navbar from './components/navbar'
export default {
  name: 'App',

  components: {
    "nav-bar":navbar
    
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.app_main{
  height: 100%;
  width: 100%;
}
</style>
