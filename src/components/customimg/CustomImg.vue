<template>
   
     <picture>
        <source v-for="(source,index) in imagedata.images.sources" :media="source.min_width" :srcset="RequireImage(source.src)">
        <img :src="RequireImage(imagedata.images.img)" :class="imagedata.class">
    </picture>
   

</template>


<script>
    export default{
        name : "CustomImg",
        props : {
            imagedata : {
                type : Object
            }
        },
        methods :{
            RequireImage(imagesrc){
                return require(`@/assets/`+imagesrc);
            }
        }
    };
</script>