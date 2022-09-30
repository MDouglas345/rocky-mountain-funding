<template>
    <div class = "col-md-6 col-sm-12 relative article-item mx-auto my-auto">
       <div class = "row justify-content-center">
            <div class="col-10 col-md-8 text-start">
                <h1 class="h3 fw-bold text-primary ">{{content.header.text}}</h1>
                <h3 v-if="content.subheader != null" class = "h5 text-primary">{{content.subheader}}</h3>
                <p v-html="content.body.html"></p>
                <button v-if="content.button != null" class="btn btn-primary p-3">
                    <router-link :to="content.button.to" class="text-secondary nav-link">{{content.button.value}}</router-link>
                </button>
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