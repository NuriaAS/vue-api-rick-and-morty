<template>
    <div class="search">
        <label :for="name">{{ label }}</label>
        <input
            class="search_input"
            v-model="inputVal"
            @change="changeHandler"
            :type="type"
            :name="name"
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
    name: 'InputGroup',
    data() {
        return {
            inputVal: ''
        }
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    },
    methods: {
        changeHandler() {
            this.$emit("inputEvent", this.inputVal)
        }
    }
}
</script>
