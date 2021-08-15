<template>
    <li>
        <a href="">
            <img :src="item.image" alt="">
            <h2>{{ item.name }}</h2>
        </a>
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
