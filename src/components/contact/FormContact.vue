<template>
  <section id="form__container">
    <div class="form__bg__left"></div>
    <form class="form__elt" action="">
      <div class="input__elt">
        <label for="">Nom</label>
        <input
          type="text"
          placeholder="Votre nom"
          v-model="name"
        >
      </div>
      <div class="input__elt">
        <label for="">Mail</label>
        <input
          type="text"
          placeholder="Votre Mail"
          v-model="mail"
        >
      </div>
      <div class="input__elt">
        <label for="">Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Entrez un message"
          v-model="message"
        ></textarea>
      </div>
      <input
        type="submit"
        class="btn__send"
        value="Envoyer"
      >
    </form>
  </section>
</template>

<script>
  export default{
    data(){
      return{
        name: '',
        mail: '',
        message: ''
      }
    }
  }
</script>

<style scoped>
  #form__container{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3%;
    padding-bottom: 3%;
  }
  .form__bg__left{
    width: 33%;
    height: 450px;
    background-image: url("../../assets/images/contact/infinimentcitron.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .form__elt{
    width: 34%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
  }
  .input__elt{
    margin-top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .input__elt input{
    width: 100%;
    border: none;
    border-bottom: solid 1px #D19F94;
    margin-top: 2%;
  }
  textarea{
    width: 100%;
    border: none;
    border-bottom: solid 1px #D19F94;
    margin-top: 10px;
  }
  label{
    font-family: 'Montez';
    font-size: 30px;
  }
  .btn__send{
    width: 20%;
    background: #D19F94;
    border: none;
    color: #fff;
    height: 35px;
    margin-top: 5%;
  }
  .btn__send:hover{
    background: #fff;
    color:  #D19F94;
    border: 1px solid  #D19F94;
  }
</style>
