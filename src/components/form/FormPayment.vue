<template>
  <section id="payment__container">
    <strong class="title__payment">Veuillez entrez votre carte bancaire</strong>
    <div class='card' ref="card"></div>
    <button class="btn" v-on:click="purchase">PAYER</button>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  let stripe = Stripe(`pk_test_XMWZeP9njaBxiCkKvUAxcWBS`);
  let elements = stripe.elements();
  let card = undefined;

  export default {
    data(){
      return{
        user: []
      }
    },
    methods:{
      ...mapActions([
        'openMenu'
      ]),
      purchase(){
        let self = this;
        stripe.createToken(card).then(function(result) {
          if (result.error) {
            self.hasCardErrors = true;
            self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
            return;
          }
        });
      }
    },
    computed:{
      ...mapGetters([
        'getUser'
      ])
    },
    created(){
      card = elements.create('card');
    },
    mounted(){
      this.openMenu()
      this.user.push(this.getUser)
      //console.log(this.user)
      for (let i = 0; i < this.user.length; i++) {
        if (this.user[i] <= 0) {
          this.$router.push('/form')
        }
      }
      card.mount(this.$refs.card);
    },
  }
</script>

<style>
  #payment__container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title__payment{
    margin-top: 5%;
  }
  .card{
    width: 50%;
    margin-top: 6%;
    border: 1px solid #D19F94;
    padding: 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .btn{
    color: #fff;
    width: 10%;
    height: 35px;
    border: none;
    background: #D19F94;
    margin-top: 5%;
    margin-bottom: 6%;
  }
  @media all and (max-width: 720px){
    #payment__container{
      height: 70vh;
    }
    .card{
      width: 70%;
      margin-top: 20%;
    }
    .title__payment{
      text-align: center;
      font-size: 30px;
      margin-top: 10%;
    }
    .btn{
      margin-top: 10%;
      width: 40%;
    }
  }
</style>
