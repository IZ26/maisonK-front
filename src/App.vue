<template>
  <div id="app">
    <headerNav/>
    <router-view/>
    <footerNav/>
  </div>
</template>

<script>
  import HeaderNav from '@/components/nav/HeaderNav'
  import FooterNav from '@/components/footer/FooterNav'
  export default {
    components:{
      HeaderNav,
      FooterNav
    },
    name: 'App'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Poppins';
  }
  strong{
    font-family: 'Montez';
    font-weight: 100;
    font-size: 45px;
  }
  li{
    list-style: none;
  }
  p{
    font-size: 14px;
    font-weight: 300;
  }
</style>
