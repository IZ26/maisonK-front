<template>
  <section>
    <section id="home__container">
      <div class="content">
        <div class="content__text__container">
          <div class="bg__img__responsive" v-scroll-reveal></div>
          <div class="content__text">
            <strong class="title">Une envie de gâteau</strong>
            <img class="deco__title" src="../../assets/images/svg/decoration_title.svg" alt="">
            <div class="event__list">
              <p><span class="deco__event"></span>Chabbat</p>
              <p><span class="deco__event"></span>Evènement</p>
              <p><span class="deco__event"></span>Anniversaire</p>
            </div>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas justo quis tristique ornare. Donec eget eros felis. Fusce sed posuere nisi. Vivamus rutrum erat elit. In posuere pellentesque lacus, dapibus sollicitudin dolor tempor sed. Suspendisse mi lacus, egestas vel pharetra et, blandit et urna. Nulla tincidunt ante eu vulputate venenatis. Proin neque purus, interdum vel bibendum eu, suscipit non tellus. Aenean facilisis viverra diam</p>
            <router-link class="btn__more" to="/carte"> En savoir plus </router-link>
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
  .event__list{
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin-top: 3%;
  }
  .deco__event{
    display: inline-block;
    width: 7px;
    height: 7px;
    background-image: url("../../assets/images/svg/deco.svg");
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 5px;
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
  .btn__more{
    width: 10%;
    height: 35px;
    text-decoration: none;
    color: #1D1D1B;
    font-size: 12px;
    font-weight: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(209, 159, 148,.6);
    z-index: 1000;
    position: absolute;
    background: white;
    margin-top: 18%;
  }
  .btn__more:hover{
    background: rgba(209, 159, 148,1);
    color: white;
    transition: all ease .5s;
  }
  .btn__more:not(:hover){
    color: #1D1D1B;
    transition: all ease .5s;
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
    width: 420px;
    height: 420px;
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
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 20px;
    }
    .content__text__container{
      width: 100%;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 10%;
    }
    .content__text{
      width: 100%;
    }
    .bg__opacity{
      display: none;
    }
    .btn__more{
      width: 30%;
      height: 35px;
      text-decoration: none;
      color: #1D1D1B;
      font-size: 12px;
      font-weight: 200;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(209, 159, 148,.6);
      z-index: 1000;
      position: absolute;
      background: white;
      top: 86%;
    }
    .deco__title{
      width: 50%;
    }
    .text{
      width: 90%;
    }
  }
</style>
