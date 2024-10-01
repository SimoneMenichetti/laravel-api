<script>
import axios from 'axios';
import { store } from '../store/store';
import Loader from '../components/partials/Loader.vue';

export default {
    name: 'Tech',
    components: {
        Loader
    },
    data() {
        return {
            technologies: [],
            isLoading: true,
        };
    },
    methods: {
        fetchTech() {
            axios
                .get(`${store.apiUrl}technologies`) 
                .then(result => {
                    this.technologies = result.data.technologies; 
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error('Errore nel recupero delle tecnologie:', error);
                    this.isLoading = false;
                });
        }
    },
    mounted() {
        this.fetchTech();
    }
}
</script>

<template>
    <div>
        <h1>Tecnologie</h1>
        <div v-if="isLoading" class="loading">
            <Loader /> 
        </div>
        <div v-else>
            <ul class="list-group">
                <li class="list-group-item" v-for="technology in technologies" :key="technology.id">
                    <strong>{{ technology.name }}</strong> - {{ technology.description }} 
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

h1{
    color: rgb(133, 156, 35);
    margin-top: 30px;
    text-align: center;
}

.list-group{
    margin-top: 2rem;
    
}
.list-group-item{
    text-align: center;
    color:rgb(133, 156, 35);
    margin-top: 1rem;

}
</style>