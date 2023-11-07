import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FazerAvaliacaoEntregador from '@/components/fazerAvaliacaoEntregador.vue'
import FazerAvaliacaoRestaurante from '@/components/fazerAvaliacaoRestaurante.vue'
import MostrarAvaliacaoRestaurante from '@/components/mostrarAvaliacaoRestaurante.vue'
import MostrarAvaliacaoEntregador from '@/components/mostrarAvaliacaoEntregador.vue'
import PaginaPrincipal from '@/components/paginaPrincipal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
{

path: '/avaliarEntredor',
component: FazerAvaliacaoEntregador


},

{

  path: '/avaliarRestaurante',
  component: FazerAvaliacaoRestaurante

},

{

path: '/mostrarAvaliacoesRestaurante',
component: MostrarAvaliacaoRestaurante

},

{

path: '/mostrarAvaliacoesEnrtegador',
component: MostrarAvaliacaoEntregador

}, 
{

  path: '/',
  component: PaginaPrincipal

}

  ]
})

export default router
