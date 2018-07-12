<template>
  <section>
    <section id="home__container">
      <strong>Découvrez Maison.K</strong>
      <div class="content">
        <div class="content__text__container">
          <div class="bg__img__responsive" v-scroll-reveal></div>
          <div class="content__text">
            <strong class="title">Une envie de gâteau</strong>
            <img class="deco__title" src="../../assets/images/svg/decoration_title.svg" alt="">
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas justo quis tristique ornare. Donec eget eros felis. Fusce sed posuere nisi. Vivamus rutrum erat elit. In posuere pellentesque lacus, dapibus sollicitudin dolor tempor sed. Suspendisse mi lacus, egestas vel pharetra et, blandit et urna. Nulla tincidunt ante eu vulputate venenatis. Proin neque purus, interdum vel bibendum eu, suscipit non tellus. Aenean facilisis viverra diam</p>
          </div>
        </div>
        <div class="bg__opacity" v-scroll-reveal>
          <div class="home__img"></div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
  #home__container{
    margin-top: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .content{
    width: 87%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-left: 10%;
    margin-top: 3%;
  }
  .content__text__container{
    width: 75%;
    display: flex;
    justify-content: flex-start;
    margin-top: 5%;
    margin-bottom: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    border: 1px solid rgba(209, 159, 148,1);
  }
  .content__text{
    width: 65%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .title{
    font-size: 35px;
  }
  .deco__title{
    width: 25%;
    margin-top: 3%;
  }
  .event__list p{
    font-size: 10px;
    display: flex;
    align-items: center;
  }
  .text{
    font-size: 14px;
    text-align: center;
    width: 80%;
    margin-top: 3%;
  }
  .home__img{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/home/tarte_grollet.png");
    background-size: contain;
    margin-top: 40px;
    margin-left: 40px;
  }
  .bg__opacity{
    width: 375px;
    height: 375px;
    position: absolute;
    background: rgba(209, 159, 148,.3);
    right: 14%;
    top: 5%;
  }

  @media all and (max-width: 720px){
    .content{
      width: 95%;
      margin-left: 0;
    }
    .bg__img__responsive{
      width: 100%;
      height: 320px;
      background-image: url("../../assets/images/home/tarte_grollet.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: 20px;
    }
    .content__text__container{
      width: 100%;
      justify-content: center;
      flex-direction: column;
    }
    .content__text{
      width: 100%;
    }
    .bg__opacity{
      display: none;
    }
    .deco__title{
      width: 50%;
    }
    .text{
      width: 90%;
    }
  }
</style>
