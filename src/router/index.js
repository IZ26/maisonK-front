import Vue from 'vue'
import Router from 'vue-router'

// All Routes
import HomePage from '@/components/home/HomePage'
import MenuPage from '@/components/menu/MenuPage'
import AboutPage from '@/components/about/AboutPage'
import ContactPage from '@/components/contact/ContactPage'
import PanierPage from '@/components/panier/PanierPage'
import ProfilPage from '@/components/profil/ProfilPage'
import FormSign from '@/components/form/FormSign'
import FormPayment from '@/components/form/FormPayment'
import MentionsLegales from '@/components/footer/MentionsLegales'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/carte',
      name: 'MenuPage',
      component: MenuPage,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/panier',
      name: 'PanierPage',
      component: PanierPage
    },
    {
      path: '/profil',
      name: 'ProfilPage',
      component: ProfilPage
    },
    {
      path: '/form',
      name: 'FormSign',
      component: FormSign
    },
    {
      path: '/mentions',
      name: 'MentionsLegales',
      component: MentionsLegales
    },
    {
      path: '/payment',
      name: 'FormPayment',
      component: FormPayment
    }
  ]
})
