<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Dashboard msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "home",
  components: {
    Dashboard
  }
};
</script>
