<script>

import NavBar from './components/partials/Navbar.vue'; 

export default{
  components:{
    NavBar
  }

}

</script>

<template>
  <div class="container">
    <NavBar/>
    <div>
      <RouterView></RouterView>
    </div>
    
  </div>

</template>

<style lang="scss" scoped>
</style>