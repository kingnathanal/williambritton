import { createRouter, createWebHistory } from 'vue-router'
import OverviewView from '../views/OverviewView.vue'
import QuietSystemsView from '../views/QuietSystemsView.vue'
import ProductCaseStudyView from '../views/ProductCaseStudyView.vue'
import FieldNotesView from '../views/FieldNotesView.vue'
import DesignForwardView from '../views/DesignForwardView.vue'
import BlueprintView from '../views/BlueprintView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/quiet-systems'
    },
    {
      path: '/concepts',
      name: 'overview',
      component: OverviewView
    },
    {
      path: '/quiet-systems',
      name: 'quiet-systems',
      component: QuietSystemsView
    },
    {
      path: '/product-case-study',
      name: 'product-case-study',
      component: ProductCaseStudyView
    },
    {
      path: '/field-notes',
      name: 'field-notes',
      component: FieldNotesView
    },
    {
      path: '/design-forward',
      name: 'design-forward',
      component: DesignForwardView
    },
    {
      path: '/blueprint',
      name: 'blueprint',
      component: BlueprintView
    }
  ]
})

export default router
