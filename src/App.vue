<template>
  <NavigationBar :NavbarData="data[`navbar`]"></NavigationBar>
  <router-view :siteData="data[`pages`]"></router-view>
  <FooterComponent :FooterData="data.footer"></FooterComponent>
  
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import sitedata from "@/data/site-data.json";
import FooterComponent from "./components/footer/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavigationBar,
    FooterComponent
},
  data() {
    return { data: sitedata };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
