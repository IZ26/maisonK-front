<template>
  <section id="profil__container">
    <div class="info__profil">
        <div v-for="(userInfo, index) in user" class="info">
          <p class="name">{{userInfo[index].lastName}} {{userInfo[index].firstName}}</p>
          <p class="mail">{{userInfo[index].mail}}</p>
        </div>
        <button @click="logOut" class="btn__edit">Déconnexion</button>
    </div>
    <div class="profil__order">
      <strong>Historique des commandes</strong>
      <img class="deco__title" src="../../assets/images/svg/decoration_title.svg"/>
      <div class="order__content__block">
        <div class="order__content">
          <p>Commande n°12:</p>
          <div class="command__content">
            <div class="product__command">
              <img class="img__product" src="../../assets/images/home/tarte_grollet.png" alt="">
              <div class="product__name">
                <p class="name__product">Tarte facon cedric grolet</p>
                <span><i>Pomme, fond de tarte</i></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data(){
      return {
        user: []
      }
    },
    methods:{
      ...mapActions([
        'openMenu',
        'userConnect'
      ]),
      logOut(){
        this.user = []
        this.userConnect(this.user)
        this.$router.push('/form')
      },
    },
    computed:{
      ...mapGetters([
        'getUser'
      ])
    },
    mounted(){
      this.openMenu()
      this.user.push(this.getUser)
      //console.log(this.user)
      for (let i = 0; i < this.user.length; i++) {
        console.log(this.user[i])
        if (this.user[i] <= 0) {
          this.$router.push('/form')
        }
      }
    }
  }
</script>
<style scoped>
  strong{
    font-size: 35px;
  }
  #profil__container{
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .info__profil{
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #D19F94;
  }
  .info{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .name{
    margin-top: 20%;
    font-size: 17px;
    color: #D19F94;
  }
  .mail{
    margin-top: 10%;
    font-size: 12px;
  }
  .btn__edit{
    border: none;
    font-weight: 100;
    color: #D19F94;
    font-size: 10px;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .btn__edit:hover{
    color: #1D1D1B;
  }
  .profil__order{
    width: 60%;
    border: 1px solid #D19F94;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .deco__title{
    margin-top: 1%;
    margin-bottom: 1%;
    width: 30%;
  }
  .order__content__block{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .order__content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .command__content{
    display: flex;
    flex-wrap: wrap;
  }
  .product__command{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img__product{
    width: 15%;
  }
</style>
