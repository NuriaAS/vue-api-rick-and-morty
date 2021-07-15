<template>
  <div class="home">
    <section class="carousel">
      <!-- <Button to="/List" value="Go to list"></Button> -->
      <button-control to="/List" text="Go to list"></button-control>
     
      <Carousel/>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import ButtonControl from '@/components/ButtonControl.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    ButtonControl,
  }
}
</script>
