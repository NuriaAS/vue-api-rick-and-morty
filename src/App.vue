<template>
  <div id="app">
      <Header/>
      <main>
        <transition name="fade">
          <router-view/>
        </transition> 
      </main>
      <footer>
        <h4>This is the footer</h4>
      </footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default ({
 components: {
   Header,
 }
})
</script>

<style lang="scss">
html {
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.fade-enter-active {
  transition-delay: 0.5s;
}
.fade-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.fade-leave {
  opacity: 1;
  transform: translateY(0px);
}
</style>
