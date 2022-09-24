<template>
<div class = "container-fluid">
    <div class = "row">
          
            <div class = "col-12">
                
                    <ImageShowItem
                        v-for ="(slideData,index) in slides"
                        :slide="slideData"
                        :index="index"
                        :currentIndex="currentSlide"
                    ></ImageShowItem>
                
            </div>

            
        
    </div>
</div>
</template>

<script>
import ImageShowItem from "./ImageShowItem.vue";
export default {
    name : "ImageShowCaser",
    props : {
        slides : {
            type : Object
        }
    },
    components : {
        ImageShowItem,  
    },
    data : () =>({
        currentSlide : 0,
        timer : null
    }),
    methods : {
        incrementIndex(){
            this.currentSlide++;
            this.currentSlide = this.currentSlide % (this.slides.length);
        }
    },
   mounted(){
        this.timer = setInterval(this.incrementIndex, 10000);
   },
   beforeMount(){
        clearInterval(this.timer);
   }
};
</script>