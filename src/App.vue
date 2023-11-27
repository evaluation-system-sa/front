<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import fazerAvaliacaoEntregador from './components/fazerAvaliacaoEntregador.vue';
import fazerAvaliacaoRestaurante from './components/fazerAvaliacaoRestaurante.vue';
import mostrarAvaliacaoEntregador from './components/mostrarAvaliacaoEntregador.vue';
import mostrarAvaliacaoRestaurante from './components/mostrarAvaliacaoRestaurante.vue';


</script>

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
