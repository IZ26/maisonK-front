<template>
  <section id="about__container">
    <div class="about__banner">
      <strong>Découvrez Maison.K</strong>
    </div>
    <aboutContent/>
    <aboutContentBottom/>
    <fantastikMichalak/>
    <div class="about__bg"></div>
  </section>
</template>

<script>
  import FantastikMichalak from '@/components/about/FantastikMichalak'
  import AboutContent from '@/components/about/AboutContent'
  import AboutContentBottom from '@/components/about/AboutContentBottom'
  import {mapActions, mapGetters} from 'vuex'

  export default{
    components:{
      FantastikMichalak,
      AboutContent,
      AboutContentBottom
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
  #about__container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .about__banner{
    width: 85%;
    height: 68vh;
    margin-top: 3%;
    background-image: url("../../assets/images/about/about_banner.png");
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
  .about__bg{
    width: 100%;
    height: 85vh;
    margin-top: 3%;
    background-image: url("../../assets/images/about/fantastikchoco.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  @media all and (max-width: 720px){
    .about__banner{
      width: 100%;
      height: 25vh;
    }
    strong{
      font-size: 35px;
    }
    .about__bg{
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
