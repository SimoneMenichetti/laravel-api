<script>
import axios from 'axios';
import {store} from '../store/store';
import Loader from '../components/partials/Loader.vue';

export default {
  name: 'Lab',
  components:{
    Loader
  },
  data() {
    return {
       // Variabile per memorizzare i progetti
      projects: [],
      isLoading: true,
      currentPage: 1,
      totalPages: 0, 
    };
  },
  methods: {
    getApi(page = 1) {
      axios
      .get(`${store.apiUrl}?page=${page}`)
        .then(result => {
          this.projects = result.data.results.data; 
          this.totalPages = result.data.results.last_page; 
          this.currentPage = result.data.results.current_page;
          this.isLoading = false ;
        })
        .catch(error => {
          console.error('Errore nel recupero dei progetti:', error);
        });
    },
    // Cambia pagina e ottieni i nuovi dati
    changePage(page) {
      this.getApi(page); 
    }
  },
  // Chiamata all'API quando il componente è montato
  mounted() {
    this.getApi(); 
  }
};
</script>

<template>
  <div class="container">
    <h1>Projects</h1>
    <div v-if="isLoading" class="loading">
      <Loader/>
    </div>
    <div v-else>
      <!-- Tabella Bootstrap per i progetti -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Slug</th>
            <th scope="col">Image</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in projects" :key="project.id">
            <th scope="row">{{ (currentPage - 1) * 20 + index + 1 }}</th>
            <td>{{ project.name }}</td>
            <td>{{ project.description }}</td>
            <td>{{ project.slug }}</td>
            <td>
              <img v-if="project.path_image" :src="project.path_image" alt="Project Image" class="img-thumbnail" style="width: 100px;" />
              <span v-else>Nessuna immagine disponibile</span>
            </td>
            <td>{{ new Date(project.created_at).toLocaleDateString() }}</td>
            <td>{{ new Date(project.updated_at).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
      
      <!-- Paginazione -->
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>


h1{
  color: rgb(61, 12, 174); 
  
}

// specifiche table
.table {
  margin-top: 20px; 
  width: 100%; 
}


.table img {
  max-width: 100px;
  height: auto; 
}

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

}

a:hover{
  color: aliceblue;
  
}
</style>