<template>
    
    <div id = "footer-container" class = "container-fluid bg-white">
        
        <div class = "row">
            <div class = "col-sm-12">
                <div class = "row justify-content-around">
                    <div v-for="(item,index) in FooterData" v-bind="item.cont_details">
                        
                        <component :is="item.header.type" v-bind="item.header.type_details">{{item.header.content}}</component>

                        <component v-for="(entry,index) in item.content" :is="entry.type" v-bind="entry.type_details" v-html="entry.content"></component>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue';

    const images = require.context('@/assets',true, /\.png$/);



   const data = defineProps({
        FooterData: Object,
    }) ;


    data.FooterData.forEach((column,index) => {
        
    });


</script>

