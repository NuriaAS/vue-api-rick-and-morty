<template>
  <!-- default gallery mode -->
  <v-gallery type="carousel" :images="list"  >
  </v-gallery>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    data(){
    return {
      list: [
        {title:'Image1',url:'https://images2.alphacoders.com/642/642540.png'},
        {title:'Image2',url:'https://images3.alphacoders.com/633/633288.png'},
        {title:'Image3',url:'https://images6.alphacoders.com/633/633294.png'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>