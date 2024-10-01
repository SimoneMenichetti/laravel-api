<script>
export default{
    name: 'Loader',
}
</script>

<template>
    <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #34db74; 
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin: 50px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>