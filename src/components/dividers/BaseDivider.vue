<template>
    <div class = "container-fluid bg-light p-0">
        <div class = "row mx-auto justify-content-around">
            <div v-bind:="column_details" v-for="(item,index) in content">
                <component :is="item.type" :content="item.data"></component>
            </div>
        </div>
    </div>
</template>


<script>
    import TextCard from '../card/TextCard.vue';
    export default{
        name : "BaseDivider",
        props : {
            content : {
                type : Object
            },
            column_details :{
                type : Object
            }
        },
        components : {
            TextCard
        }   
    };
</script>