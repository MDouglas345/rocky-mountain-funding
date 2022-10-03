<template>
    <div v-bind:="content.container_details">
        <div class = "row justify-content-center">
            <div v-bind:="content.column_details" v-for="(item,index) in content.content">
                <component :is="item.type" :content="item.data"></component>
            </div>
        </div>
    </div>
    
</template>


<script>
    import TextCard from '../card/TextCard.vue';
    import TextTitle from '../text/TextTitle.vue';
    import LabelCard from "../card/LabelCard.vue"
    export default{
        name : "InnerDivider",
        props : {
            content : {
                type : Object
            }
        },
        components : {
            TextCard, TextTitle, LabelCard
        }   
    };
</script>