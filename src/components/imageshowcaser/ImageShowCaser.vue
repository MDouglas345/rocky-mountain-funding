<template>
<div class = "container-fluid  m-0 p-0">
    <div class = "row">
          
            <div id = "imageshowitems-cont" :v-ref="imageshowitems_cont" class = "col-12 p-0 m-0 relative home-carousel-image-container">
                
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
        },
        matchHeight(){
            //var cont = this.$refs.imageshowitems_cont;
        }
        
    },
   mounted(){
        this.timer = setInterval(this.incrementIndex, 10000);
        this.matchHeight();
   },
   beforeMount(){
        clearInterval(this.timer);
   }
};
</script>