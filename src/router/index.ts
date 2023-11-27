import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FazerAvaliacaoEntregador from '@/components/fazerAvaliacaoEntregador.vue'
import FazerAvaliacaoRestaurante from '@/components/fazerAvaliacaoRestaurante.vue'
import MostrarAvaliacaoRestaurante from '@/components/mostrarAvaliacaoRestaurante.vue'
import MostrarAvaliacaoEntregador from '@/components/mostrarAvaliacaoEntregador.vue'
import PaginaPrincipal from '@/components/paginaPrincipal.vue'
import PaginaPrincipalAvaliacao from '@/components/paginaPrincipalAvaliacao.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
{

path: '/avaliarEntregador/:id',
component: FazerAvaliacaoEntregador


},

{

  path: '/avaliarRestaurante/:id',
  component: FazerAvaliacaoRestaurante

},

{

path: '/mostrarAvaliacoesRestaurante',
component: MostrarAvaliacaoRestaurante

},

{

path: '/mostrarAvaliacoesEntregador',
component: MostrarAvaliacaoEntregador

}, 
{

  path: '/',
  component: PaginaPrincipal

},

{

  path: "/avaliacoes",
  component: PaginaPrincipalAvaliacao


}

  ]
})

export default router
