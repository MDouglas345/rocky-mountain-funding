<template>
    <div>
        

        <TransitionGroup name="fade">
            <CustomImg  v-show="index===currentIndex" :imagedata="slide" :key="index"></CustomImg>
            <component  v-show="index===currentIndex && slide.OverlayContent.available===true" :is="slide.OverlayContent.type" :content="slide.OverlayContent.data" :key="index"></component>
             
        </TransitionGroup>
    </div>
</template>


<script>
import CustomImg from '../customimg/CustomImg.vue';
import HomeOverlay from './slideoverlays/HomeOverlay.vue';
import TestimonialOverlay from './slideoverlays/TestimonialOverlay.vue';
import SolutionsTemplateOverlay from './slideoverlays/SolutionsTemplateOverlay.vue';
import TitleWithSubOverlay from './slideoverlays/TitleWithSubOverlay.vue';
import AboutOverlay from './slideoverlays/AboutOverlay.vue';
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
    components: { CustomImg, HomeOverlay, TestimonialOverlay, SolutionsTemplateOverlay, TitleWithSubOverlay, AboutOverlay}
};
</script>
