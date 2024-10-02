<script>
export default {
    name:'Paginator',

    props: {
        currentPage:{
            type: Number,
            Required: true
        },
        totalPages:{
            type:Number,
            Required: true
        }
    },
    methods: {
        changePage(page) {
            this.$emit('change-page', page);
        }
    }
}
</script>

<template>
   <!-- inserisco la paginazione con il next ed il prev -->
   <nav>
      <ul class="pagination justify-content-center ">
        <!-- button prev -->
        <li class="page-item" :class="{ disable: currentPage === 1}">
          <button class="page-link" href="#" @click="changePage(currentPage -1)" >Prev</button>
        </li>

        <!-- Link delle Pagine -->
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>

        <!-- next -->
        <li class="page-item" :class="{disabled: currentPage === totalPages}">
          <button class="page-link " href="#" @click.prevent="changePage(currentPage +1)">Next</button>
        </li>
      </ul>
      </nav>
</template>

<style lang="scss" scoped>

// paginazione
.pagination {
  margin-top: 20px; 
  display: flex; 
  justify-content: center; 
}

.pagination .page-item {
  margin-right: 5px; 
  text-decoration: none;
}

a{
  margin: 0px 6px;
  color: brown;

}

a:hover{
  color: aliceblue;
  
}

button{
 background-color: rgb(17, 17, 151);
 color: brown;
}
</style>