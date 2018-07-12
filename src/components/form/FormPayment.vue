<template>
  <h1>Payment</h1>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data(){
      return{
        user: []
      }
    },
    methods:{
      ...mapActions([
        'openMenu'
      ]),
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
    },
  }
</script>
