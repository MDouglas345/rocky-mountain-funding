<template>
<div class = "container-fluid  m-0 p-0">
    <div class = "row">

             <div v-if="(container_details != null)" id = "imageshowitems-cont"  :class="container_details">
                
                    <ImageShowItem
                        v-for ="(slideData,index) in slides"
                        :slide="slideData"
                        :index="index"
                        :currentIndex="currentSlide"
                        :key="index"
                    ></ImageShowItem>
                
            </div>
          
            <div v-if="(container_details == null)" id = "imageshowitems-cont"  class = "col-12 p-0 m-0 relative home-carousel-image-container">
                
                    <ImageShowItem
                        v-for ="(slideData,index) in slides"
                        :slide="slideData"
                        :index="index"
                        :currentIndex="currentSlide"
                        :key="index"
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
        },
        container_details  : {
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
            if (this.slides.length == 1){return;}
            this.currentSlide++;
            this.currentSlide = this.currentSlide % (this.slides.length);
        },
        matchHeight(){
            //var cont = this.$refs.imageshowitems_cont;
        }
        
    },
   mounted(){
        this.timer = setInterval(this.incrementIndex, 3000);
        this.matchHeight();
   },
   beforeMount(){
        clearInterval(this.timer);
   }
};
</script>