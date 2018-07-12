<template>
  <section>
    <section id="home">
      <strong class="title">Découvrez Maison.K</strong>
      <section id="home__container">
        <img class="img img1" src="../../assets/images/home/fantastik_home.png"/>
        <img class="img" src="../../assets/images/home/buffet_home.png"/>
        <img class="img" src="../../assets/images/home/fantastik_home_pistache.png"/>
        <img class="img img1" src="../../assets/images/home/buffet_home_halavi.png"/>
      </section>
    </section>
    <homeContent/>
    <homeContentBottom/>
    <div class="bg__home"></div>
    <testimonyContent/>
  </section>
</template>

<script>
  import HomeContent from '@/components/home/HomeContent'
  import HomeContentBottom from '@/components/home/HomeContentBottom'
  import TestimonyContent from '@/components/home/TestimonyContent'
  import {mapActions, mapGetters} from 'vuex'

  export default{
    components: {
      HomeContent,
      HomeContentBottom,
      TestimonyContent,
    },
    methods:{
      ...mapActions([
        'openMenu'
      ]),
    },
    mounted(){
      this.openMenu()
    }
  }
</script>

<style scoped>
  .bg__home{
    width: 100%;
    height: 85vh;
    background-image: url("../../assets/images/home/bg_home_bottom.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
    margin-top: 5%;
  }
  #home{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #home__container{
    display: flex;
    width: 95%;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
  }
  #home__container img{
    width: 23%;
    box-shadow: 5px 5px 20px rgba(209, 159, 148,.5);
  }
  #home__container img:nth-child(2),
  #home__container img:nth-child(4){
    margin-top: 100px;
  }
  .img{
    -webkit-animation: image_appear 1s ease-in-out;
  }
  .title{
    margin-top: 3%;
  }
  @-webkit-keyframes image_appear {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  @media all and (max-width: 720px) {
    #home__container{
      height: 70vh;
    }
    #home__container img{
      width: 45%;
    }
    .img1{
      display: none;
    }
    .title{
      margin-top: 10%;
    }
    .bg__home{
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
