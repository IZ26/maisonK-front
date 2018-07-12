<template>
  <section id="social__nav">
    <div class="social">
      <a href=""><i class="fab fa-facebook-f"></i></a>
      <a href=""><i class="fab fa-instagram"></i></a>
      <a href=""><i class="fab fa-snapchat-ghost"></i></a>
    </div>
  </section>
</template>

<script></script>

<style>
  #social__nav{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .fa-instagram{
    font-size: 18px !important;
  }
  .fab{
    font-size: 15px;
    color: #1D1D1B;
  }
  .fab:hover{
    color: #D19F94;
  }

  @media all and (max-width: 720px){
    #social__nav{
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
</style>
