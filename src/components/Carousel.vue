<template>
  <!-- default gallery mode -->
  <v-gallery type="carousel" :images="list" control-title>
  </v-gallery>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    data(){
    return {
      list: [
        {url:'https://images2.alphacoders.com/642/642540.png'},
        {url:'https://images3.alphacoders.com/633/633288.png'},
        {url:'https://images6.alphacoders.com/633/633294.png'},
      ],
      
    }
  }
}
</script>

<style lang="less" scoped>

</style>