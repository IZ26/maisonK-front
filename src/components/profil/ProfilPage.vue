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
          <p class="number__commande">Commande n°12:</p>
          <div class="command__content">
            <div class="product__command">
              <img class="img__product" src="../../assets/images/home/tarte_grollet.png" alt="">
              <div class="product__name">
                <p class="name__product">Tarte facon cedric grolet</p>
                <span><i>Pomme, fond de tarte</i></span>
              </div>
            </div>
            <div class="product__command">
              <img class="img__product" src="../../assets/images/home/tarte_grollet.png" alt="">
              <div class="product__name">
                <p class="name__product">Tarte facon cedric grolet</p>
                <span><i>Pomme, fond de tarte</i></span>
              </div>
            </div>
            <div class="product__command">
              <img class="img__product" src="../../assets/images/home/tarte_grollet.png" alt="">
              <div class="product__name">
                <p class="name__product">Tarte facon cedric grolet</p>
                <span><i>Pomme, fond de tarte</i></span>
              </div>
            </div>
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
  .number__commande{
    padding-left: 20px;
    font-size: 12px;
  }
  .order__content__block{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .order__content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 10px;
  }
  .command__content{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-left: 15px;
  }
  .product__command{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 48%;
    padding: 1%;
  }
  .img__product{
    width: 20%;
  }
  .product__name{
    font-size: 12px;
    margin-left: 20px;
  }
  .product__name span{
    font-size: 10px;
    color: #D19F94;
    font-weight: 100;
  }
  @media all and (max-width: 720px) {
    strong{
      font-size: 25px;
    }
    #profil__container{
      flex-direction: column;
      align-items: center;
    }
    .info__profil{
      width: 90%;
      margin-bottom: 10%;
    }
    .profil__order{
      width: 90%;
    }
    .order__content{
      flex-direction: column;
      align-items: center;
    }
    .product__command{
      width: 100%;
      align-items: center;
    }
    .number__commande{
      width: 35%;
      padding-left: 0px;
      border-bottom: 1px solid #D19F94;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
  }
</style>
