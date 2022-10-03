<template>
    <ImageShowCaser :slides="siteData[$route.name].slide" :container_details="siteData[$route.name].slide_details"></ImageShowCaser>
    <component v-for="(item,index) in siteData.careers.content" :is="item.element" v-bind="item.element_details"></component>
  
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import CustomImg from "@/components/customimg/CustomImg.vue";
import ImageShowCaser from "@/components/imageshowcaser/ImageShowCaser.vue";
import BaseDivider from "@/components/dividers/BaseDivider.vue";
import InfoLayout from "@/components/layouts/InfoLayout.vue";
import ArticleLayout from "@/components/layouts/ArticleLayout.vue";
// @ is an alias to /src

export default {
  name: "CareersView",
  components: {
    HelloWorld,
    CustomImg,
    ImageShowCaser,
    BaseDivider,
    InfoLayout,
    ArticleLayout
},
  props : {
    siteData : {
      type : Object
    }
  },
  mounted () {
    window.scrollTo(0, 0);
    document.title = "Careers | " + this.$hostname;
  }
  
};  


</script>


