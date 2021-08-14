<template>
  <div class="home">
    <section class="carousel">
      <Carousel/>
      <button-control to="/characters" text="Go to characters list"></button-control>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import ButtonControl from '@/components/ButtonControl.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    ButtonControl,
  }
}
</script>
