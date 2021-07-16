<template>
  <div class="home">
    <section class="carousel">
     <Carousel/>
      <button-control to="/List" text="Go to list"></button-control>
    </section>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue';
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
