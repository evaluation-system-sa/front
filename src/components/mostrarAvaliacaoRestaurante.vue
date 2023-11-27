<template>
 

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
                <td>{{ notaRestaurante.cliente }}</td>
                <td>{{ notaRestaurante.restaurante }}</td>
                <td>{{ notaRestaurante.nota }}</td>
                <td>{{ notaRestaurante.descricao }}</td>
                <td>
                    <button type="button" class="btn btn-danger" @click="aoExcluirAvaliacao(notaRestaurante.id)">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
                <td>

                    <button type="button" class="btn btn-danger" @click="aoEditarAvaliacao(notaRestaurante.id)">
                        
                        <i class="fa-sharp fa-light fa-pencil"></i>

                    </button>

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
        const response = await http.get("/avaliacaoRestaurante/1");
        this.avaliacaoRestaurante = response.data;
    },

    methods:{
        
        async aoExcluirAvaliacao(id : number){

            await http.delete("/avaliacaoRestaurante/"+id);

            const response = await http.get("/avaliacaoRestaurante/1");

            this.avaliacaoRestaurante = response.data;

        },

        async aoEditarAvaliacao(id : number){

        this.$router.push('/avaliarRestaurate/'+id)

        const response = await http.get("/avaliacaoRestaurante/1");

        this.avaliacaoRestaurante = response.data;

}



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
