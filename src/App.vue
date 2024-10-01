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
    <RouterView></RouterView>
  </div>

</template>

<style lang="scss" scoped>
</style>