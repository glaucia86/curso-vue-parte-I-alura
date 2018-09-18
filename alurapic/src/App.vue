<template>
  <div class="corpo">

    <meu-menu :rotas="routes"></meu-menu>

  <transition name="pagina">
    <router-view></router-view> 
  </transition>

  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu': Menu
  },

  data() {
    return {
      routes
    }
  }
}
</script>


<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

.pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  
.pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>