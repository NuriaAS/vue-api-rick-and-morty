<template>
    <div class="header">
      <router-link to="/">Rick&Morty<br>Characters</router-link>
      <input-search  v-show="$route.path==='/List' ? true : false" :placeholder=this.placeholder></input-search>
    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import InputSearch from '@/components/InputSearch.vue'

export default ({
   name: 'Header',
   data() {
       return {
           placeholder: 'Start typing name'
       }
   },
   components: {
       InputSearch,
   }
})
</script>
