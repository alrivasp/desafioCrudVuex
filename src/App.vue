<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  data: () => ({
    name: "Home",
  }),
  components: { NavBar },
};
</script>
