<template>
    <component :is="type" :to="to"> {{ text }}</component>
</template>

<script>
export default {
    name: 'ButtonControl',
    props: {
        to: {
            required: false
        },
        text: {
            type: String
        }
    },
    computed: {
        type() {
            if(this.to) {
                return 'router-link'
            }
            return 'button'
        }
    }
}
</script>
