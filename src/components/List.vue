<template>
    <ul>
      <linked-item 
        v-for="listItem in listItems" 
        :item="listItem" 
        :key="listItem.id"
      />
    </ul>
</template>
<script>
import LinkedItem from '@/components/LinkedItem.vue';
export default {
    name: 'List',
    props: {
        listItems: {
            type: Array,
            required: true
        }
    },
    components: {
        LinkedItem,
    }
}
</script>
