<template>
  <section id="panier__container">
    <div class="product__block">
      <div v-for="(product, index) in cart" class="product">
        <div class="product__content">
          <img class="img__product" :src="product.image" alt="">
          <div class="product__name">
            <p class="name">{{product.name}}</p>
            <span><i>{{product.description}}</i></span>
          </div>
        </div>
        <div class="price__product">
          <p class="price">{{product.totalPrice}}€</p>
          <div class="change__quantity">
            <button @click="removeProduct(index)"><i class="fas fa-minus"></i></button>
            <p class="quantity">{{product.quantity}}</p>
            <button @click="addNewProduct(index)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
      <p class="total__price"> TTC: {{ttcPrice}}€</p>
      <router-link class="payment" to="/payment">PAYER</router-link>
    </div>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default{
    data (){
      return{
        ttcPrice: [],
        cart: []
      }
    },
    methods: {
      ...mapActions([
        'openMenu',
        'addProduct'
      ]),
      addNewProduct(index){
        this.cart = [].concat(this.cart)
        this.cart[index].quantity++
        this.cart[index].totalPrice = this.cart[index].price * this.cart[index].quantity
        this.addProduct(this.cart)
        let price = 0
        for (let i = 0; i < this.cart.length; i++) {
          price += parseFloat(this.cart[i].totalPrice)
        }
        this.ttcPrice = price
      },
      removeProduct(index){
        this.cart = [].concat(this.cart)
        if(this.cart[index].quantity >= 1){
          this.cart[index].quantity--
          this.cart[index].totalPrice = this.cart[index].price * this.cart[index].quantity
          this.addProduct(this.cart)
          let price = 0
          for (let i = 0; i < this.cart.length; i++) {
            price += parseFloat(this.cart[i].totalPrice)
          }
          this.ttcPrice = price
        }else{
          this.cart[index].quantity = 0
        }
      },
    },
    computed:{
      ...mapGetters([
        'getCart'
      ])
    },
    mounted(){
      this.openMenu()
      this.cart = this.getCart
      let price = 0
      for (let i = 0; i < this.cart.length; i++) {
        price += parseFloat(this.cart[i].totalPrice)
      }
      this.ttcPrice = price
    }
  }
</script>

<style scoped>
  span{
    font-weight: 100;
    font-size: 12px;
    color: #D19F94;
  }
  button{
    border: none;
    width: 25px;
    height: 25px;
    background: #D19F94;
    outline: none;
  }
  .fas{
    color: #ffffff;
    font-size: 12px;
  }
  #panier__container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .product__block{
    width: 60%;
    border: 1px solid #D19F94;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .product{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1%;
    padding-bottom: 1%;
    border-bottom: 1px solid #D19F94;
  }
  .product:last-child{
    border: none;
  }
  .product__content{
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .product__name{
    margin-left: 5%;
  }
  .name{
    font-size: 15px;
    color: #1D1D1B;
  }
  .img__product{
    width: 25%;
  }
  .price__product{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .change__quantity{
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .quantity{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .price{
    font-family: Montez;
    font-size: 35px;
  }
  .total__price{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #D19F94;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: Montez;
    font-size: 30px;
  }
  .payment{
    text-decoration: none;
    color: #fff;
    background: #D19F94;
    width: 20%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media all and (max-width: 720px){
    .product__block{
      width: 100%;
      border-right: none;
      border-left: none;
    }
    .img__product{
      width: 40%;
    }
    .product__content{
      width: 70%;
    }
    .price__product{
      width: 20%;
    }
    .change__quantity{
      width: 100%;
    }
    .name{
      font-size: 12px;
    }
  }
</style>
