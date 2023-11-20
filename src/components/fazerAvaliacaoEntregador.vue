<template>
 <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand text-light" href="#">Senai Food</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <RouterLink to="/dadosRestaurante" class="nav-link text-light">Dados Restaurante</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/cardapio" class="nav-link text-light">Cardápio</RouterLink>
                </li>
                
                
                
                
                <li class="nav-item">
                    <RouterLink to="/entregas" class="nav-link text-light">Entregas</RouterLink>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Avaliações
                    
                </a>
           
                <ul class="dropdown-menu">
                    <li>
                        <RouterLink to="/avaliarRestaurante" class="dropdown-item">Restaurante</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/avaliarEntregador" class="dropdown-item">Entregador</RouterLink>
                    </li>
                
                <li>
                    <RouterLink to="/mostrarAvaliacoesRestaurante" class="dropdown-item">Avaliações de Restaurantes
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/mostrarAvaliacoesEntregador" class="dropdown-item"> Avaliações de Entregadores
                    </RouterLink>
                </li>
                
            </ul>
            </li>
            
        </ul>
        <span class="nav-item">
            <a class="nav-link text-light">Logout</a>
        </span>
    </div>
</div>
</nav>

<div class="avalia">

  <feedback :descricao="descricao" :nota="nota"></feedback>

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
      descricao: ""

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