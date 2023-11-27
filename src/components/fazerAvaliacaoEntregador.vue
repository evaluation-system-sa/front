<template>
 

<div class="avalia">

  <feedback v-model:descricao="avaliacaoEntregador.descricao" v-model:nota="avaliacaoEntregador.nota" @ao-editar="editarAvaliacao"></feedback>

</div>

  
</template>
<script lang="ts">

import type AvaliacaoEntregador from './interfaces/AvaliacaoEntregador';
import { defineComponent } from 'vue';
import http from './http'
import feedback from './feedback.vue';

export default defineComponent({

  components: {

    feedback


  },

  data() {

    return {

      nota: 0,
      descricao: "",
      avaliacaoEntregador: {} as AvaliacaoEntregador   

    }

  }, async mounted () {

    const response = await http.get('/avaliacaoEntregador/avaliacaoEntregadorId/'+this.$route.params.id)

    this.avaliacaoEntregador = response.data

  }, methods: {

    async editarAvaliacao() {

        await http.put('/avaliacaoEntregador', this.avaliacaoEntregador)

        this.$router.push('/mostrarAvaliacoesEntregador')

    }


  }

})

</script>

<style>

.avalia{

            background-color: rgba(255, 255, 255, 0.8); /* Cor de fundo branca opaca */
            border-radius: 10px; /* Borda arredondada */
            padding: 20px; /* Espaçamento interno para o conteúdo */
            margin-top: 15px;

}

</style>