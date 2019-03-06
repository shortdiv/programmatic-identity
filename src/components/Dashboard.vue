<template>
  <div class="hello">
    <div id="auth--modal"></div>
    <button @click="openIdentityModal">Open Modal</button>
  </div>
</template>

<script>
const netlifyIdentity = require("netlify-identity-widget");

import { mapActions } from "vuex";
export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  mounted() {
    // this.initializeIdentity("#auth--modal")
    netlifyIdentity.init({
      container: "#auth--modal",
      APIUrl: "https://whatscooking.netlify.com/.netlify/identity"
    });
    netlifyIdentity.open("login");
  },
  methods: {
    ...mapActions("auth", ["initializeIdentity", "openIdentityModal"]),
    ...mapActions("user", ["getUserData"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
