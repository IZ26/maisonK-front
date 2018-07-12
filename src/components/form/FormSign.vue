<template>
  <section id="form__container">
    <div class="forms">
      <form class="signup__form" @submit.prevent="signUp">
        <strong class="title">Connexion</strong>
        <p class="message__error">{{messageErrorLogin}}</p>
        <div class="input__elt">
          <label>Mail</label>
          <input
            class="input__field"
            type="text"
            placeholder="Votre mail"
            v-model="mail_login"
          >
        </div>
        <div class="input__elt">
          <label>Mot de passe</label>
          <input
            class="input__field"
            type="password"
            placeholder="Votre mot de passe"
            v-model="password_login"
          >
        </div>
        <input class="btn" type="submit" value="CONNEXION">
      </form>
      <form class="signin__form" @submit.prevent="signIn">
        <strong class="title">Inscription</strong>
        <p class="message__error">{{messageErrorSignIn}}</p>
        <div class="input__elt">
          <label>Nom</label>
          <input
            class="input__field"
            type="text"
            placeholder="Votre nom"
            v-model="lastname"
          >
        </div>
        <div class="input__elt">
          <label>Prénom</label>
          <input
            class="input__field"
            type="text"
            placeholder="Votre prénom"
            v-model="firstname"
          >
        </div>
        <div class="input__elt">
          <label>Mail</label>
          <input
            class="input__field"
            type="text"
            placeholder="Votre mail"
            v-model="mail"
          >
        </div>
        <div class="input__elt">
          <label>Mot de passe</label>
          <input
            class="input__field"
            type="password"
            placeholder="Votre mot de passe"
            v-model="password"
          >
        </div>
        <div class="input__elt">
          <label>Confirmation mot de passe</label>
          <input
            class="input__field"
            type="password"
            placeholder="Votre mot de passe"
            v-model="confirmPassword"
          >
        </div>
        <input class="btn" type="submit" value="INSCRIPTION">
      </form>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        mail: '',
        password: '',
        mail_login: '',
        password_login: '',
        messageErrorLogin: '',
        messageErrorSignIn: '',
        confirmPassword: ''
      }
    },
    methods:{
      ...mapActions([
        'openMenu',
        'userConnect'
      ]),
      signIn() {
        let mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!mail.test(this.mail)) {
          this.messageErrorSignIn = "Mail invalide"
        }
        else if (this.password != this.confirmPassword) {
          this.messageErrorSignIn = "Les mots de passe ne correspondent pas"
        }
        else {
          this.$http.post(`http://localhost:3000/users/signin`, {
            firstName: this.firstname,
            lastName: this.lastname,
            mail: this.mail,
            password: this.password
          })
            .then(res => {
              this.userConnect(res.data)
              if (this.$router.go(-1) != '/payment' || this.$router.go(-1) != '/profil') {
                this.$router.push('/')
              } else {
                this.$router.go(-1)
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      signUp(){
        this.$http.post(`http://localhost:3000/users/login`, {
          mail: this.mail_login,
          password: this.password_login
        })
          .then(res => {
            this.userConnect(res.data)
            this.messageErrorLogin = ""
            if(this.$router.go(-1) != '/payment' || this.$router.go(-1) != '/profil'){
              this.$router.push('/')
            }else{
              this.$router.go(-1)
            }
          })
          .catch(err => {
            console.log(err)
            this.messageErrorLogin = "Mail ou mot de passe incorrect"
          })
      },
    },
    mounted(){
      this.openMenu()
    }
  }
</script>

<style scoped>
  #form__container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .message__error{
    margin-top: 20px;
    color: red;
  }
  label {
    font-family: 'Montez';
    font-size: 20px;
    margin-top: 10px;
  }
  .forms {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4%;
    margin-bottom: 4%;
  }
  .title{
    font-size: 35px;
    margin-bottom: 20px;
  }
  .signin__form, .signup__form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }
  .signin__form{
    border-left: 1px solid #D19F94;
    box-sizing: border-box;
  }
  .input__elt{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
  }
  .input__field {
    border: none;
    border-bottom: 1px solid #D19F94;
    margin-top: 5px;
    outline: none;
    width: 100%;
    padding-bottom: 5px;
  }
  .btn{
    border: none;
    width: 25%;
    height: 30px;
    color: #fff;
    margin-top: 20px;
    background: #D19F94;
    outline: none;
  }
  ::placeholder{
    font-size: 10px;
  }
  @media all and (max-width: 720px) {
    .forms{
      flex-direction: column;
    }
    .signin__form{
      border-left: none;
      border-top: 1px solid #D19F94;
      margin-top: 10px;
      padding-top: 10px;
    }
    .signup__form{
      margin-bottom: 20px;
    }
    .signin__form, .signup__form{
      width: 100%;

    }
    .input__elt{
      width: 70%;
    }
    .btn{
      width: 35%;
    }
  }
</style>
