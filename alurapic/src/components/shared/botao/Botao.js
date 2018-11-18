/*
 * Arquivo: src/components/shared/botao/Botao.js
 * Data: 18/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'Botao.js'
 * Author: Glaucia Lemos
 */

export default {
  props: {
    tipo: {
      required: true,
      type: String
    },
    rotulo: {
      required: true,
      type: String
    },

    confirmacao: Boolean,
    estilo: String
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado");
        }

        return;
      }

      this.$emit("botaoAtivado");
    }
  },

  computed: {
    estiloBotao() {
      if (this.estilo == "padrao") return "botao botao-padrao";
      if (this.estilo == "perigo") return "botao botao-perigo";
    }
  }
}
