<template>
    <div class="search">
        <label for="search">Look for your favorite characther</label>
        <input type="search" class="search_input" name="search" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: 'InputSearch',
    props: {
        placeholder: {
            type: String,
            required: true,
        }
    },
}
</script>
