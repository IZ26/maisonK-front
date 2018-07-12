<template>
  <section id="contact__container">
    <formContact/>
    <div class="contact__bg"></div>
  </section>
</template>

<script>
  import FormContact from '@/components/contact/FormContact'
  import {mapActions, mapGetters} from 'vuex'

  export default{
    components:{
      FormContact
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

<style>
  .contact__bg{
    width: 100%;
    height: 85vh;
    background-image: url("../../assets/images/contact/bg_contact.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
    margin-top: 5%;
  }
  @media all and (max-width: 720px){
    .contact__bg{
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
