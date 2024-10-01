<script>
import axios from 'axios';
import { store } from '../store/store';
import Loader from '../components/partials/Loader.vue';

export default {
  name: 'Types',
  components: {
    Loader
  },
  data() {
    return {
      types: [],
      isLoading: true,
    };
  },
  methods: {
        fetchTypes() {
            // Concatenazione dell'endpoint direttamente
            axios
                .get(`${store.apiUrl}types`)
                .then(result => {
                    this.types = result.data.types;
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error('Errore del recupero dei types:', error);
                    this.isLoading = false;
                });
        }
    },
    mounted() {
        this.fetchTypes(); 
    }
}
</script>

<template>
    <div>
      <h1>Tipi di Progetti</h1>
      <div v-if="isLoading" class="loading">
        <Loader /> 
      </div>
      <div class="box-list" v-else>
        <ul class="list-group">
          <li class="list-group-item" v-for="type in types" :key="type.id">
            <strong>{{ type.name }}</strong> 
          </li>
        </ul>
      </div>
    </div>
</template>

<style lang="scss" scoped>
h1{
    text-align: center;
    color: rgb(35, 156, 152);
    margin-top: 30px;
}


.list-group{
    margin-top: 2rem;
    
}
.list-group-item{
    text-align: center;
    color: rgb(68, 87, 87);
    margin-top: 1rem;

}
</style>

