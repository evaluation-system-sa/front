<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import fazerAvaliacaoEntregador from './components/fazerAvaliacaoEntregador.vue';
import fazerAvaliacaoRestaurante from './components/fazerAvaliacaoRestaurante.vue';
import mostrarAvaliacaoEntregador from './components/mostrarAvaliacaoEntregador.vue';
import mostrarAvaliacaoRestaurante from './components/mostrarAvaliacaoRestaurante.vue';


</script>

<template>
   
   <div class="container">

    <div class="col">

      <div class="row">

        <RouterView />


      </div>

    </div>

   </div>

 
</template>

<style>

html, body  {

background-image: url("assets/foto-fundo.jpg"); 

} 


</style>
