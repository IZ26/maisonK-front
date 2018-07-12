<template>
  <footer>
    <router-link class="btn__footer" to="/mentions"> Mentions Legales </router-link>
    <img class="logo__footer" src="../../assets/images/svg/logo.svg"/>
  </footer>
</template>
<style scoped>
  footer{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .logo__footer{
    margin-top: 2%;
    margin-bottom: 2%;
    width: 5%;
    margin-left: 30%;
  }
  .btn__footer{
    color: #1D1D1B;
    font-size: 10px;
    font-weight: 200;
    text-decoration: none;
    margin-left: 11%;
  }
  .btn__footer:hover{
    color: #D19F94;
  }
  @media all and (max-width: 720px){
    .logo__footer{
      margin-top: 3%;
      margin-bottom: 3%;
      width: 15%;
      margin-left: 16%;
    }
    .btn__footer{
      color: #1D1D1B;
      font-size: 8px;
      font-weight: 200;
      text-decoration: none;
      margin-left: 11%;
    }

  }
</style>
