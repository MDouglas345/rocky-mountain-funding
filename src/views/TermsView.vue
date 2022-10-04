<template>
    <ImageShowCaser :slides="siteData[$route.name].slide" :container_details="siteData[$route.name].slide_details"></ImageShowCaser>

    <div class ="container-fluid">
        <div class="row justify-content-center">
            <div class = "col-lg-10 col-12">
                <StepsWithTitle :content="siteData[$route.name].points"></StepsWithTitle>
            </div>
        </div>
    </div>
</template>

<script>
import ImageShowCaser from '@/components/imageshowcaser/ImageShowCaser.vue';
import ArticleLayout from '@/components/layouts/ArticleLayout.vue';
import BaseDivider from '@/components/dividers/BaseDivider.vue';
import StepsWithTitle from '@/components/list/StepsWithTitle.vue';

    export default{
    name: "TermsView",
    props: {
        siteData: {
            type: Object
        }
    },
    components: { ImageShowCaser, ArticleLayout, BaseDivider, StepsWithTitle },
    mounted () {
    window.scrollTo(0, 0);
    document.title = "Terms & Conditions | " + this.$hostname;
  }
};
</script>