<template>
    <header class="header">
        <nav>
            <ul>
                <li>
                    <router-link to="/">
                        Rick&Morty
                    </router-link>
                </li>
                <li v-show="$route.path===`/character/${$route.params.id}/${$route.params.name}` ? true : false">
                    <router-link to="/characters">
                        Go to Characters list
                    </router-link>
                </li>
            </ul>
        </nav>
        <input-group
            v-show="$route.path==='/characters' ? true : false"
            @inputEvent="changeFilterHandler"
            :type="this.inputType"
            :name="this.inputName"
            :label="this.inputLabel"
            :placeholder="this.inputPlaceholder"
        />
    </header>
</template>
<script>
import InputGroup from '@/components/InputGroup.vue';

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
