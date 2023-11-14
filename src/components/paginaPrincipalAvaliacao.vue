<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand text-light">Senai Food</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <RouterLink  to="/dadosRestaurante" class="nav-link text-light">Dados Restaurante</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink  to="/cardapio" class="nav-link text-light">Cardápio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink  class="nav-link active text-light" to="/avaliacoes">Avaliações</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink  to="/entregas" class="nav-link text-light">Entregas</RouterLink>
                    </li>
                </ul>
                <span class="nav-item">
                    <a class="nav-link text-light">Logout</a>
                </span>
            </div>
        </div>
    </nav>

    <div class="menuAvalia">
        
        <button to="/avaliarEntregador "> Avaliar Entregador </button>

        <button @click=""> Avaliar Restaurante</button>

    </div>

    


  </template>
  
  <script lang="ts">
  
  import { computed, defineComponent } from "vue";
import type fazerAvaliacaoEntregadorVue from "./fazerAvaliacaoEntregador.vue";
import { RouterLink } from "vue-router";
  
  export default defineComponent({
    name: "NavMenu",
   
  })
  </script>