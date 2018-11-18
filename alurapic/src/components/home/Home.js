/*
 * Arquivo: src/components/Home/Home.js
 * Data: 18/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'Home.js'
 * Author: Glaucia Lemos
 */

import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from '../shared/botao/Botao.vue';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  methods: {
    remove(foto) {
      if(confirm('Confirma?')) {
        alert(foto.titulo)
      }
    }
  },

  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ""
    }
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
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
}
