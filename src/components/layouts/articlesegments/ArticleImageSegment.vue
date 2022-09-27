<template>
    <div class = "col-md-6 col-sm-12 relative article-item">
        <CustomImg :imagedata="content.image"></CustomImg>
        <div v-bind="content.text.cont_details">
            <component :is="content.text.type" :content="content.text.content"></component>
        </div>
    </div>
</template>

<script>
import CustomImg from '@/components/customimg/CustomImg.vue';
import TextTitle from '@/components/text/TextTitle.vue';
    export default {
    name: "ArticleImageSegment",
    props: {
        content: {
            type: Object
        }
    },
    components: { CustomImg,TextTitle }
};
</script>