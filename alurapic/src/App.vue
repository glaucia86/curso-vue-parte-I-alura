<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre pelo Título da Foto">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>
        
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel.vue";

export default {
  components: {
    "meu-painel": Painel
  },
  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: ''
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let expressao = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => expressao.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(fotos => (this.fotos = fotos), err => console.log(err));
  }
};
</script>

<style>
.titulo {
  text-align: center;
}

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva {
  width: 100%;
}

.filtro {
  display: block;
  width: 100%
}
</style>