<template>
  <section id="logo">
    <router-link to="/" class="logo"><img class="logo__img" src="../../assets/images/svg/logo.svg"/></router-link>
  </section>
</template>

<script></script>

<style>
  #logo{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo__img{
    width: 50%;
  }

  @media all and (max-width: 720px) {
    #logo{
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(209, 159, 148,1);
    }
    .logo__img{
      width: 50%;
    }
  }
</style>
