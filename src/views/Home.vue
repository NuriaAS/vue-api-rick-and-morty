<template>
  <div class="home">
    <section class="carousel">
      <Carousel/>
      <router-link :to="{ name: 'Characters' }">Go to characters' list</router-link>
    </section>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
  }
}
</script>
