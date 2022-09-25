<template>
    <transition name="fade">
        <CustomImg  v-show="index===currentIndex" :imagedata="slide" :key="index"></CustomImg>
    </transition>
</template>


<script>
import CustomImg from '../customimg/CustomImg.vue';
    export default{
    name: "ImageShowItem",
    props: {
        slide: {
            type: Object
        },
        index: {
            type: Number
        },
        currentIndex: {
            type: Number
        }
    },
    components: { CustomImg }
};
</script>
