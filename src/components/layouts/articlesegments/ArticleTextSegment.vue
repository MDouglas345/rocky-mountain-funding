<template>
    <div class = "col-md-6 col-sm-12 relative article-item mx-auto my-auto p-3">
       <div class = "row justify-content-center">
            <div class="col-10 col-md-9 text-start">
                <h1 :class="content.header.class">{{content.header.text}}</h1>
                <h3 v-if="content.subheader != null" :class ="content.subheader.class" >{{content.subheader.text}}</h3>
                <p v-html="content.body.html"></p>
                 <router-link :to="content.button.to" class="text-secondary nav-link">
                    <button v-if="content.button != null" class="btn btn-primary p-3 text-secondary">
                   {{content.button.value}}
                    </button>
                </router-link>
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