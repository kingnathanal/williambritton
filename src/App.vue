<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <transition name="view">
      <router-view />
    </transition>-->
    <FrontDoor />
  </div>
</template>

<script>
// import NavBar from "./components/NavBar.vue";
import FrontDoor from './components/FrontDoor.vue'

export default {
  name: 'app',
  components: {
    // NavBar,
    FrontDoor
  }
}
</script>

<style>
body {
  background-color: #fff;
  font-family: "Montserrat", sans-serif !important;
}
/*
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000000;
    color: #f2f2f2;
  }
}
*/

#app {
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>
