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
      this.isLoading = true;
      axios
      .get(`${store.apiUrl}projects?page=${page}`)
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
              <img v-if="project.path_image" :src="project.path_image" alt="Project Image" class="img-thumbnail" style="width: 100px;" />
              <span v-else>Nessuna immagine disponibile</span>
            </td>
            <td>{{ new Date(project.created_at).toLocaleDateString() }}</td>
            <td>{{ new Date(project.updated_at).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>

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