<template>
    <div class = "col-md-6 col-sm-12 relative article-item mx-auto my-auto">
       <div class = "row justify-content-center">
            <div class="col-10 col-md-8 text-start">
                <h1 class="h3 fw-bold text-primary ">{{content.header.text}}</h1>
                <p v-html="content.body.html"></p>
            </div>
       </div>
    </div>
</template>

<script>
import CustomImg from '@/components/customimg/CustomImg.vue';
    export default {
    name: "ArticleImageSegment",
    props: {
        content: {
            type: Object
        }
    },
    components: { CustomImg }
};
</script>