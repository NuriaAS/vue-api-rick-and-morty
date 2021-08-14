<template>
    <ul>
      <li v-for="item in items" :key="item.id">
        <img :src="item.image" alt="">
        <h2>{{ item.name }}</h2>
      </li>
    </ul>
</template>
<script>

export default {
    name: 'List',
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
