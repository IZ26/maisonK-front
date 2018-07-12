<template>
  <section id="testimony__container">
    <div class="testimony__content_container">
      <section class="testimony__content">
        <span class="double__quote open"></span>
        <swiper loop :autoplay='3500' :speed=1500>
          <div  class="testimony" v-for="testimony in testimonys">
            <p class="testimony">
              {{testimony.comment}}
            </p>
            <span class="name">
              {{testimony.name}}
            </span>
          </div>
        </swiper>
        <span class="double__quote close"></span>
      </section>
    </div>
  </section>
</template>

<script>

  export default{
    data(){
      return{
        testimonys:[
          {name: 'Sarah', comment:'C\'est très bon!'},
          {name: 'Deborah', comment:'Je vous le conseille'},
          {name: 'Elisa' , comment:"C'est bon comme beau, la folie, la folie, la folie, la folie, la folie pas de mots"},
        ]
      }
    }
  }
</script>

<style scoped>
  #testimony__container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .testimony__content_container{
    width: 78%;
    border: 1px solid rgba(209, 159, 148,1);
    padding-top: 3%;
    padding-bottom: 3%;
    margin-top: 3%;
    display: flex;
    justify-content: center;
  }
  .testimony__content{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .double__quote{
    display: inline-block;
    width: 15px;
    height: 15px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .open{
    background-image: url("../../assets/images/home/double_quote_open.svg");
  }
  .close{
    background-image: url("../../assets/images/home/double_quote_close.svg");
    margin-top: 25px;
  }
  .testimony{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .name{
    font-size: 12px;
    font-weight: 400;
  }
</style>
