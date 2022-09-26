<template>
  <div class="home">
    <component v-for="(item,index) in siteData.home.content" :is="item.element" v-bind="item.element_details"></component>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import CustomImg from "@/components/customimg/CustomImg.vue";
import ImageShowCaser from "@/components/imageshowcaser/ImageShowCaser.vue";
import BaseDivider from "@/components/dividers/BaseDivider.vue";
import InfoLayout from "@/components/layouts/InfoLayout.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CustomImg,
    ImageShowCaser,
    BaseDivider,
    InfoLayout
},
  props : {
    siteData : {
      type : Object
    }
  },
};  
</script>
