<template>
  <section>
    <div class="header__responsive">
      <a class="menu-icon" @click="openMenu">
        <div class="menu-icon-mid"></div>
      </a>
      <div class="logo">
        <img src="../../assets/images/svg/logo.svg" alt="">
      </div>
    </div>
    <header class="header" v-bind:class="{header:getStatus, 'header__show':!getStatus}">
      <a class="menu-close" @click="openMenu">
        <div>
          <img src="../../assets/images/svg/close.svg" alt="">
        </div>
      </a>
      <logoNav/>
      <navigation/>
      <socialNav/>
    </header>
  </section>
</template>

<script>
  import LogoNav from '@/components/nav/LogoNav'
  import Navigation from '@/components/nav/Navigation'
  import SocialNav from '@/components/nav/SocialNav'
  import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
      LogoNav,
      Navigation,
      SocialNav
    },
    name: 'HeaderNav',
    data(){
      return{
      }
    },
    methods: {
      ...mapActions([
        'openMenu'
      ])
    },
    computed: {
      ...mapGetters([
        'getStatus'
      ])
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(209, 159, 148,1);
    box-shadow: 1px 1px 20px rgba(209, 159, 148,.5);
  }
  .header__responsive{
    display: none;
  }
  @media all and (max-width: 720px){
    .header{
      left: -105%;
      top: 0;
      background: white;
      position: absolute;
      flex-direction: column;
      transition: .8s ease-in-out;
    }
    .header__show {
      left: 0;
      top: 0;
      background: white;
      position: absolute;
      flex-direction: column;
      width: 100%;
      z-index: 1000;
    }
    .header__responsive{
      display: flex;
      border-bottom: 1px solid rgba(209, 159, 148, .5);
      padding-bottom: 25px;
    }
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 25px;
      width: 100%;
    }
    .logo img{
      width: 20%;
    }
    .menu-close{
      position: absolute;
      left: 5%;
      top: 5%;
    }
    .menu-close img{
      width: 10%;
    }
    a.menu-icon {
      width: 33px;
      height: 23px;
      background: transparent;
      top: 7%;
      left: 7%;
      position: absolute;
    }
    a.menu-icon::before{
      content: "";
      width: 70%;
      position: absolute;
      background: white;
      border: 1px solid rgba(209, 159, 148, 1);
      height: 3px;
      transition-duration: .3s;
      transition-delay: .1s;
    }
    div.menu-icon-mid{
      width: 100%;
      background: white;
      border: 1px solid rgba(209, 159, 148, 1);
      position: absolute;
      height: 3px;
      top: calc(50% - 1.75px);
      pointer-events: none;
    }
    a.menu-icon::after{
      content: "";
      width: 80%;
      position: absolute;
      background: white;
      border: 1px solid rgba(209, 159, 148, 1);
      height: 3px;
      bottom: 0;
      transition-duration: .4s;
    }
    a.menu-icon:hover:before, a.menu-icon:hover:after{
      width: 100%;
    }
  }
</style>
