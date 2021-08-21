<template>
    <li>
        <router-link :to="{ name: 'Character', params: { id: item.id, characterName: item.name } }">
            <img :src="item.image" alt="">
            <h2>{{ item.name }}</h2>
        </router-link>
    </li>
</template>
<script>

export default {
    name: 'LinkedItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>
