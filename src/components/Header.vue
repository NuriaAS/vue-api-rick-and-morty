<template>
    <header class="header">
      <router-link to="/">Rick&Morty<br>Characters</router-link>
      <input-search  v-show="$route.path==='/List' ? true : false" :placeholder=this.placeholder></input-search>
    </header>
</template>
<script>
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
