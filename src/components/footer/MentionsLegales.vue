<template>
  <div>
    <h1>Mentions legales</h1>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    methods:{
      ...mapActions([
        'openMenu'
      ])
    },
    mounted(){
      this.openMenu()
    }
  }
</script>
