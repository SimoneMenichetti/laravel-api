<script>
import axios from 'axios';
import { store } from '../store/store';
import Loader from '../components/partials/Loader.vue';
import Paginator from '../components/partials/Paginator.vue';

export default {
  name: 'Lab',
  components:{
    Loader,
    Paginator
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
      this.isLoading = true;
      axios
      .get(`${store.apiUrl}projects?page=${page}`)
        .then(result => {
        console.log(result.data);

        this.projects = result.data.results.data; 
          console.log('Projects:', this.projects);
          this.projects.forEach(project => {
            console.log('Project Image Path:', project.path_image);
          });
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
  <div>
    <h1>Projects</h1>
    <div v-if="isLoading" class="loading">
      <Loader/>
    </div>
    <div v-else>
      <!-- Tabella per visualizzare i progetti -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Technologies</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in projects" :key="project.id">
            <th scope="row">{{ (currentPage - 1) * 20 + index + 1 }}</th>
            <td>{{ project.name }}</td>
            <td>{{ project.type ? project.type.name : 'N/A' }}</td>
            <td>
              <!-- Itera sulle tecnologie di ciascun progetto -->
              <ul v-if="project.technologies && project.technologies.length">
                <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
              </ul>
              <span v-else>N/A</span>
            </td>

            <!-- stampa descrizione -->
            <td>{{ project.description }}</td>

            <!-- itera le path_image per ogni progetto -->
            <td>
                <img v-if="project.path_image" :src="project.path_image " alt="Project Image" class="img-thumbnail" />
                <span v-else>Nessuna immagine disponibile</span>
            </td>
            <td>{{ new Date(project.created_at).toLocaleDateString() }}</td>
            <td>{{ new Date(project.updated_at).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
      <Paginator
        :currentPage="currentPage"
        :totalPages="totalPages"
        @change-page="changePage"
      />
      </div>
  </div>
</template>

<style lang="scss" scoped>


h1{
  color: rgb(61, 12, 174); 
  display: flex;
  justify-content: center;
  
}

// specifiche table
.table {
  margin-top: 20px; 
  width: 70%; 
  font-size: 1rem;
  margin-left: auto;
  margin-right: auto;
}

tr{
  text-decoration: none;
  color: brown;
  
}

.table th, .table td{
  padding: 1rem;
  border: 1px solid blue;
  border-radius: 10px;
}



.table-sm{
  font-size: 1rem;
}


td img{
  width: 50px;
}



</style>