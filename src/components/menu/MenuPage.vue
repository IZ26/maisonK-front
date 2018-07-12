<template>
  <section id="menu__container">
    <div class="menu__banner">
      <strong>Découvrez notre carte</strong>
    </div>
    <menuCat/>
    <div class="menu__bg"></div>
  </section>
</template>

<script>
  import MenuCat from '@/components/menu/MenuCat'
  import {mapActions, mapGetters} from 'vuex'

  export default{
    components:{
      MenuCat,
    },
    methods:{
      ...mapActions([
        'openMenu'
      ])
    },
    mounted(){
      this.openMenu()
    }
  }
</script>

<style scoped>
  #menu__container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .menu__banner{
    width: 85%;
    height: 68vh;
    margin-top: 1%;
    margin-bottom: 1%;
    background-image: url("../../assets/images/menu/menu_banner.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  strong{
    font-size: 50px;
    color: #fff;
  }
  .menu__bg{
    width: 100%;
    height: 85vh;
    margin-top: 3%;
    background-image: url("../../assets/images/menu/menu_bg.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  @media all and (max-width: 720px){
    .menu__banner{
      width: 100%;
      height: 25vh;
    }
    strong{
      font-size: 35px;
    }
    .menu__bg{
      width: 100%;
      height: 40vh;
      background-size: contain;
      background-attachment: initial;
      background-position: center;
      background-repeat: no-repeat;
      margin-bottom: 5%;
    }
  }
</style>
