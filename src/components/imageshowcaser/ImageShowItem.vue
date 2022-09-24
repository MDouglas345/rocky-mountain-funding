<template>
    <Transition name="slide-in" duration="300">
        <div class = "col-12">
            
                <CustomImg v-if="index===currentIndex" :imagedata="slide"></CustomImg>
            
        </div>
    </Transition>
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