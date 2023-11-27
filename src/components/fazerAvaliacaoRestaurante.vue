<template>


<div class="avalia">

<feedback v-model:descricao="avaliacaoRestaurante.descricao" v-model:nota="avaliacaoRestaurante.nota" @ao-editar="editarAvaliacao"></feedback>

</div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import http from './http'
import type AvaliacaoRestaurante from './interfaces/AvaliacaoRestaurante';
import feedback from './feedback.vue';

export default defineComponent({

  components: {

feedback


},

data() {

return {

  nota: 0,
  descricao: "",
  avaliacaoRestaurante: {} as AvaliacaoRestaurante   

}

}, async mounted () {

const response = await http.get('avaliacaoRestaurante/avaliacaoRestauranteId/'+this.$route.params.id)

this.avaliacaoRestaurante = response.data

}, methods: {

async editarAvaliacao() {

    await http.put('/avaliacaoRestaurante', this.avaliacaoRestaurante)

    this.$router.push('/mostrarAvaliacoesRestaurante')

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
