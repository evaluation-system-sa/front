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

<div class="lista">

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Id Cliente</th>
                <th scope="col">Id Restaurante</th>
                <th scope="col">Nota</th>
                <th scope="col">Descrição</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for=" notaRestaurante in avaliacaoRestaurante">
                <th scope="row">{{ notaRestaurante.id }}</th>
                <td>{{ notaRestaurante.id_cliente }}</td>
                <td>{{ notaRestaurante.id_restaurante }}</td>
                <td>{{ notaRestaurante.nota }}</td>
                <td>{{ notaRestaurante.desc }}</td>
                <td>
                    <button type="button" class="btn btn-danger" @click="$emit('aoExcluirAvaliacao', notaRestaurante.id)">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
                <td>

                    <button type="button" class="btn btn-danger" @click="$emit('aoAttAvaliacao', notaRestaurante.id)"></button>

                </td>
            </tr>
            
        </tbody>
    </table>

</div>


</template>

<script lang="ts">

import { defineComponent } from 'vue';
import http from './http'
import type AvaliacaoRestaurante from './interfaces/AvaliacaoRestaurante';

export default defineComponent({

    name: "listaAvaliacaoRestaurante",
    data() {
        return {
            avaliacaoRestaurante: [] as AvaliacaoRestaurante[]
        }
    },
    async mounted() {
        const response = await http.get("/avaliacaoRestaurante");
        this.avaliacaoRestaurante = response.data;
    }

})


</script>

<style>

.lista{

background-color: rgba(255, 255, 255, 0.8); /* Cor de fundo branca opaca */
border-radius: 10px; /* Borda arredondada */
padding: 20px; /* Espaçamento interno para o conteúdo */
margin-top: 15px;

}

</style>
