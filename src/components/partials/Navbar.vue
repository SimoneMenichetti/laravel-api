<script>
export default {
  name: 'NavBar',
  computed: {
    // Determina la classe del box-shadow in base alla rotta corrente
    currentRouteClass() {
      switch (this.$route.name) {
        case 'home':
          return 'home-shadow';
        case 'about':
          return 'about-shadow';
        case 'lab':
          return 'projects-shadow';
        case 'tech':
          return 'tech-shadow';
          case 'type':
          return 'type-shadow';
        default:
          return '';
      }
    },
  },
  methods: {
    // Restituisce lo stile per il link corrente
    getLinkStyle(routeName) {
     
      if (this.$route.name === routeName) {
        switch (routeName) {
          // Verde per Home
          case 'home':
            return { color: 'rgb(12, 174, 61)' }; 
            // Arancione per About
          case 'about':
            return { color: 'rgb(174, 61, 12)' }; 
            // Blu per Projects
          case 'lab':
            return { color: 'rgb(61, 12, 174)' }; 
            // Verde oliva per Technologies
          case 'tech':
            return { color: 'rgb(133, 156, 35)' }; 
            // colore Types
            case 'type':
            return { color: 'rgb(35, 156, 152)' };
             // Colore predefinito
          default:
            return { color: 'rgba(255, 255, 255, 0.257)' };
        }
      } else {
        // Colore per i link non attivi
        return { color: 'rgba(255, 255, 255, 0.5)' };
      }
    },
  },
};
</script>

<template>
  <div>
    <!-- Applica una classe dinamica per il box-shadow basata sulla rotta corrente -->
    <ul :class="[currentRouteClass, 'Navbar']">
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="nav-link"
          :style="getLinkStyle('home')"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'about' }"
          class="nav-link"
          :style="getLinkStyle('about')"
        >
          About us
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'lab' }"
          class="nav-link"
          :style="getLinkStyle('lab')"
        >
          Projects
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'tech' }"
          class="nav-link"
          :style="getLinkStyle('tech')"
        >
          Technologies
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'type' }"
          class="nav-link"
          :style="getLinkStyle('type')"
        >
          Types
        </router-link>
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>
ul {
  backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.18);
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  transition: box-shadow 0.5s ease-in-out;

  li {
    display: inline-block;

    .nav-link {
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
      padding: 5px 10px;
      color: inherit; 

      &:hover {
        opacity: 0.7;
      }

      &.router-link-active {
        font-weight: bold;
        border-bottom: 2px solid currentColor;
      }
    }
  }
}

/* box-shadow in base alla rotta  */
.home-shadow {
  box-shadow: 0px 0px 30px rgb(12, 174, 61); 
}

.about-shadow {
  box-shadow: 0px 0px 30px rgb(174, 61, 12); 
}

.projects-shadow {
  box-shadow: 0px 0px 30px rgb(61, 12, 174); 
}

.tech-shadow {
  box-shadow: 0px 0px 30px rgb(133, 156, 35); 
}

.type-shadow {
  box-shadow: 0px 0px 30px rgb(35, 156, 152); 
}
</style>