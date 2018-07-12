<template>
  <section class="navigation">
    <div class="header__top">
      <router-link class="link link__top" to="/form">Connexion </router-link>
      <span>/</span>
      <router-link class="link link__top" to="/form">Inscription</router-link>
    </div>
    <div class="header__bottom">
      <div>
        <router-link class="link link__bottom" to="/">ACCUEIL</router-link>
        <router-link class="link link__bottom" to="/carte">CARTE</router-link>
      </div>
      <div>
        <router-link class="link link__bottom" to="/about">ABOUT</router-link>
        <router-link class="link link__bottom" to="/contact">CONTACT</router-link>
      </div>
      <div class="right__nav">
        <router-link class="link link__bottom" to="/panier">PANIER</router-link>
        <router-link class="link link__bottom" to="/profil">PROFIL</router-link>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
  .navigation{
    width: 60%;
    border-left: 1px solid rgba(209, 159, 148,1);
    border-right: 1px solid rgba(209, 159, 148,1);
  }
  .header__top{
    display: flex;
    justify-content: flex-end;
    font-size: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .header__bottom{
    display: flex;
    justify-content: space-around;
  }
  .header__bottom div{
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid rgba(209, 159, 148,1);
    font-size: 12px;
  }
  .link{
    text-decoration: none;
    color: #1D1D1B;
    font-weight: 100;
  }
  span{
    color: #1D1D1B
  }
  .link__top, span{
    margin-right: 1%;
  }
  .link__top:last-child{
    margin-right: 5%;
  }
  .link__top:hover{
    color: #D19F94;
    opacity: 1;
  }
  .link__bottom {
    border-right: 1px solid rgba(209, 159, 148,1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: .5s;
  }
  .link__bottom:hover{
    background: rgba(209, 159, 148,1);
    color: #fff;
    transition: .5s;
  }
  @media all and (max-width: 720px) {
    .header__top{
      justify-content: center;
      border-right: none;
    }
    .navigation{
      width: 100%;
      border-bottom: 1px solid  rgba(209, 159, 148,1);
    }
    .header__bottom {
      flex-direction: column;
    }
  }
</style>
