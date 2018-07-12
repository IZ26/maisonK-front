<template>
  <section id="menucat__container">
    <div class="menucat">
      <div class="nav__menu">
        <div>
          <div @click="getCategory('specialites')">
            <p class="btn__menu">SPÉCIALITÉS</p>
          </div>
          <div @click="getCategory('tarte')">
            <p class="btn__menu">TARTES</p>
          </div>
          <div @click="getCategory('gateaux')">
            <p class="btn__menu">GÂTEAUX</p>
          </div>
        </div>
        <div>
          <div @click="getCategory('gouter')">
            <p class="btn__menu">GOÛTER</p>
          </div>
          <div @click="getCategory('salades')">
            <p class="btn__menu">SALADES</p>
          </div>
          <div @click="getCategory('plateaux')">
            <p class="btn__menu">PLATEAUX</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="product__list">
        <draggable v-model="products" id="list__container"
                   :options="{group:{name:'product', pull: 'clone', put: false }}"
                   @end="onAdd"
                   :move="onMove"
        >
          <div v-for="product in products" class="card__products">
            <img :src="product.image" alt="">
            <div class="info__products">
              <strong class="name__products">{{product.name}}</strong>
              <p class="description__products"><i>{{product.description}}</i></p>
              <p class="price__products">{{product.price}}€</p>
            </div>
            <button class="btn__add">AJOUTER</button>
          </div>
        </draggable>
      </div>
      <div class="cart">
        <draggable
          v-model="newCart"
          :options="{group:'product'}"
          :move="onMove"
        >
          <p class="title__cart">Faites glisser vos produits</p>
          <div v-for="(product) in newCart" class="product__add">
            <img class="img__product" :src="product.image" alt="">
            <strong class="name__product">{{product.name}}</strong>
            <div class="product__quantity">
              <p class="price__product">{{product.price}}€</p>
              <span class="quantity">{{product.quantity}}</span>
            </div>
          </div>
          <div class="total__price"></div>
        </draggable>
        <button @click="showCart" class="btn__cart">Mon Panier</button>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import draggable from 'vuedraggable'

  export default {
    components: {
      draggable
    },
    data() {
      return {
        category: 'specialites',
        all: [],
        products: [],
        newCart: [],
        isDragging: false,
        ttcPrice: []
      }
    },
    methods: {
      ...mapActions([
        'addProduct'
      ]),
      showCart() {
        this.$router.push('/panier')
        this.addProduct(this.newCart)
      },
      getCategory(cat) {
        this.category = cat
        this.products = this.all.filter(product => product.category == this.category)
        console.log(this.products)
      },
      onMove: function ({relatedContext, draggedContext}) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      },
      onAdd: function (event) {
        let tab = []
        for (let i = 0; i < this.newCart.length; i++) {
          if (this.newCart[i].id == this.products[event.oldIndex].id) {
            tab.push(i)
          }
        }
        if (tab.length > 1) {
          for (let i = 0; i < tab.length; i++) {
            this.newCart.splice(tab[i], 1)
            if (i > 0) {
              this.products[event.oldIndex].quantity++
            }
          }
        }
        this.products[event.oldIndex].totalPrice = this.products[event.oldIndex].quantity * this.products[event.oldIndex].price
      }
    },
    computed: {
      ...mapGetters([
        'getCart',
      ])
    },
    mounted() {
      this.$http.get(`http://localhost:3000/products/all`)
        .then(response => {
          this.all = response.data
          this.all.forEach((product) => {
            product.quantity = 1
            product.totalPrice = product.quantity * product.price
          })
          this.products = this.all.filter(product => product.category == this.category)
        }).catch(e => {
        console.error(e)
      })
    }
  }
</script>

<style scoped>
  #menucat__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .menucat {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D19F94;
  }

  .nav__menu {
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav__menu div {
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btn__menu {
    text-decoration: none;
    color: #1D1D1B;
    font-weight: 100;
    font-size: 12px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-right: 1px solid #D19F94;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .nav__menu > div:first-child > div:first-child {
    border-left: 1px solid #D19F94;
  }

  .btn__menu:hover {
    color: #fff;
    background: rgba(209, 159, 148, 1);
    transition: all ease .5s;
    opacity: 1;
  }

  .btn__menu:not(:hover) {
    transition: all ease .5s;
  }

  .product {
    width: 100%;
    display: flex;
    margin-top: 3%;
    justify-content: space-around;
    align-items: flex-start;
  }

  .product__list {
    width: 75%;
  }

  .product__quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .quantity {
    color: red;
  }

  .cart {
    width: 25%;
    border: solid 1px #D19F94;
    margin-right: 2%;
    margin-top: 1.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .btn__cart {
    width: 35%;
    height: 30px;
    border: 1px solid #D19F94;
    background: #fff;
    color: #1D1D1B;
    font-size: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .title__cart {
    border-bottom: solid 1px #D19F94;
    padding: 10px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product__add {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #D19F94;
  }

  .img__product {
    width: 35%;
    margin-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .name__product {
    font-size: 20px;
    padding-top: 5px;
    margin-left: 10px;
  }

  .price__product {
    font-size: 25px;
    margin-right: 10px;
  }

  #list__container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .card__products {
    margin-left: 2%;
    margin-top: 2%;
    width: 22%;
    background: #fff;
    border: 1px solid #D19F94;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .card__products div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .card__products img {
    width: 100%;
  }

  .info__products {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .name__products {
    width: 90%;
    height: 60px;
    text-align: center;
    font-size: 25px;
    margin-top: 15px;
  }

  .description__products {
    width: 85%;
    height: 40px;
    text-align: center;
    font-size: 10px;
    color: #D19F94;
    margin-top: 5px;
  }

  .price__products {
    margin-top: 10px;
    font-size: 30px;
    height: 50px;
    font-family: 'Montez';
  }

  .btn__add {
    width: 35%;
    height: 30px;
    border: 1px solid #D19F94;
    background: #fff;
    font-size: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    transition: 0.5s;
    outline: none;
  }

  .btn__add:hover {
    background: #D19F94;
    color: #fff;
    transition: 0.5s;
  }

  @media all and (max-width: 720px) {
    .nav__menu {
      flex-direction: column;
      align-items: center;
    }

    .nav__menu > div:first-child {
      border-bottom: 1px solid #D19F94;
    }

    .nav__menu div:first-child > .btn__menu:last-child {
      border-right: 1px solid #D19F94;
    }

    .nav__menu > div:last-child {
      border-left: 1px solid #D19F94;
      box-sizing: border-box;
    }
    .product{
      flex-direction: column-reverse;
    }
    .product__list{
      width: 100%;
    }
    .cart {
      width: 95%;
      margin-left: 2.5%;
    }
    .card__products{
      width: 47%;
    }
  }
</style>
