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
        default:
          return '';
      }
    },
    // Determina lo stile dei link in base alla rotta corrente
    currentLinkStyle() {
      switch (this.$route.name) {
        // verde home
        case 'home':
          return { color: 'rgb(12, 174, 61)' }; 
        //   arancione about
        case 'about':
          return { color: 'rgb(174, 61, 12)' }; 
        // Colore blu per Projects
        case 'lab':
          return { color: 'rgb(61, 12, 174)' }; 

           // Colore blu per Projects
        case 'tech':
          return { color: 'rgb(133, 156, 35)' }; 
        // Colore predefinito
        default:
          return { color: 'rgba(255, 255, 255, 0.257)' }; 
      }
    },
  },
};
</script>

<template>
    <div>
      <!-- Applica una classe dinamica per il box-shadow basata sulla rotta corrente -->
      <ul :class="currentRouteClass" class="Navbar">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="nav-link"
            :style="currentLinkStyle"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'about' }"
            class="nav-link"
            :style="currentLinkStyle"
          >
            About us
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'lab' }"
            class="nav-link"
            :style="currentLinkStyle"
          >
            Projects
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'tech' }"
            class="nav-link"
            :style="currentLinkStyle"
          >
          Technologies
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
      border: green;
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

    /* Classi specifiche per il box-shadow in base alla rotta corrente */
  .home-shadow {
  /* Colore per Home */
  box-shadow: 0px 0px 30px rgb(12, 174, 61); 
}
  /* Colore per About us */
.about-shadow {
  box-shadow: 0px 0px 30px rgb(174, 61, 12); 
}
/* Colore per Projects */
.projects-shadow {
  box-shadow: 0px 0px 30px rgb(61, 12, 174); 
}
// colore per technologies
.tech-shadow {
  box-shadow: 0px 0px 30px rgb(133, 156, 35);
}

</style>