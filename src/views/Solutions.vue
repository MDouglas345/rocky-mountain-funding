<template>
    <ImageShowCaser :slides="siteData[$route.name].slide" :container_details="siteData[$route.name].slide_details"></ImageShowCaser>
    <div class ="container-fluid">
        <div class = "row justify-content-center">
            <div class = "col-11 col-sm-12 col-lg-8 text-start mt-5 mb-5">
                <h2 class="h2 fw-bold">{{siteData[$route.name].intro.header}}</h2>
                <p v-html="siteData[$route.name].intro.content"></p>
                <button class = "btn btn-primary p-3"><router-link to="/applynow" class="text-secondary nav-link p5">View your options</router-link></button>
            </div>
        </div>
    </div>

    <component v-for="(item,index) in siteData[$route.name].content" :is="item.element" v-bind="item.element_details"></component>
</template>

<script>
import ImageShowCaser from '@/components/imageshowcaser/ImageShowCaser.vue';
import ArticleLayout from '@/components/layouts/ArticleLayout.vue';
import BaseDivider from '@/components/dividers/BaseDivider.vue';
    export default{
    name: "Solutions",
    props: {
        siteData: {
            type: Object
        }
    },
    components: { ImageShowCaser, ArticleLayout, BaseDivider }
};
</script>