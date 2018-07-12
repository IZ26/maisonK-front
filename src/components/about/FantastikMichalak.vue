<template>
  <section id="fantastik__container">
    <div class="about__fantastik">
      <strong class="title">Les Fantastik de MaisonK aimé par Christophe Michalak</strong>
      <div class="about__img">
        <img src="../../assets/images/about/michalak2.png" alt=""/>
        <img src="../../assets/images/about/michalak.png" alt=""/>
        <img src="../../assets/images/about/michalak3.png" alt=""/>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #fantastik__container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .about__fantastik{
    width: 85%;
    padding-top: 3%;
    padding-bottom: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #D19F94;
  }
  .title{
    font-size: 35px;
    width: 45%;
    text-align: center;
  }
  .about__img{
    margin-top: 5%;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .about__img img{
    box-shadow: 1px 1px 25px rgba(209, 159, 148,.5);
  }
</style>


