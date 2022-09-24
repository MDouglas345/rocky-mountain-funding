<template>
  <h1>Hello World!</h1>
  <p>This is amazing, Vue JS is great</p>
  
</template>

<script>
import ImageShowCaser from './imageshowcaser/ImageShowCaser.vue';
import CustomImg from './customimg/CustomImg.vue';
export default {
    name: "HelloWorld",
    components: { ImageShowCaser, CustomImg }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
