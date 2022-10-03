<template>
    <div class="container-fluid">
        <div class = "row">
            <div v-if="content.details==null" class = "col-12 col-md-11 article-container">
                <div class = "row">
                    <component v-if="content.swapped ===false || !isMobile()" v-for="(item,index) in content.data" :is="item.type" :content="item.content"></component>
                    <component v-if="content.swapped === true && isMobile()" v-for="(item,index) in content.data.slice().reverse()" :is="item.type" :content="item.content"></component>
                </div>
            </div>
            <div v-if="content.details!=null" v-bind="content.details">
                <div class = "row">
                    <component v-if="content.swapped ===false || !isMobile()" v-for="(item,index) in content.data" :is="item.type" :content="item.content"></component>
                    <component v-if="content.swapped === true && isMobile()" v-for="(item,index) in content.data.slice().reverse()" :is="item.type" :content="item.content"></component>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import ArticleImageSegment from './articlesegments/ArticleImageSegment.vue';
import ArticleTextSegment from './articlesegments/ArticleTextSegment.vue';
    export default {
    name: "ArticleLayout",
    props: {
        content: {
            type: Object
        }
    },
    components: { ArticleImageSegment,ArticleTextSegment },
    methods : {
        isMobile(){
            
            return window.innerWidth < 768;
        }
    }
};
</script>