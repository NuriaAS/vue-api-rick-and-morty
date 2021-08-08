<template>
    <header class="header">
        <router-link to="/">
            Rick&Morty<br>Characters
        </router-link>
        <input-group
            v-show="$route.path==='/List' ? true : false"
            @inputEvent="changeFilterHandler"
            :type="this.inputType"
            :name="this.inputName"
            :label="this.inputLabel"
            :placeholder="this.inputPlaceholder"
        />
    </header>
</template>
<script>
import InputGroup from '@/components/InputGroup.vue'

export default ({
   name: 'Header',
   data() {
       return {
           inputPlaceholder: 'Start typing name',
           inputLabel: 'Look for your favorite character',
           inputName: 'filter',
           inputType: 'text',
       }
   },
   methods: {
    changeFilterHandler(value) {
        this.$store.dispatch('setFilteredList', value.toLowerCase());
    },  
   },
   components: {
       InputGroup,
   }
})
</script>
