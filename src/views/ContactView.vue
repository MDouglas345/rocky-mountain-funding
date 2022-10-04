<template>
    <ImageShowCaser :slides="siteData[$route.name].slide" :container_details="siteData[$route.name].slide_details"></ImageShowCaser>
    <div class ="container-fluid">
        <div class="row justify-content-center text-start">
            <div class ="col-lg-10 col-12">
                <div class ="row justify-content-center contact-container p-5">
                    <div class="col-12 col-lg-6 align-items-center">
                        <h1>{{siteData[$route.name].header}}</h1>
                        <h4 class = "contact-item">
                            <span class="material-icons display-5 vertical-align-m">location_on</span> 
                            {{siteData[$route.name].address}}
                        </h4>
                        <h4>
                            <span class="material-icons display-5 vertical-align-m">phone</span>
                            <a :href="`tel:`+siteData[$route.name].number">{{siteData[$route.name].number}}</a>
                        </h4>
                        <h4>
                            <span class="material-icons  display-5 vertical-align-m">email</span>
                            <a :href="`mailto:`+siteData[$route.name].email">{{siteData[$route.name].email}}</a>
                        </h4>
                    </div>
                    <div class="col-12 col-lg-6">
                        <Googlemap :content="siteData[$route.name].map"></Googlemap>        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import ImageShowCaser from '@/components/imageshowcaser/ImageShowCaser.vue';
import Googlemap from '@/components/gmap/googlemap.vue';
    
    export default{
    name: "ContactView",
    props: {
        siteData: {
            type: Object
        }
    },
    components: { ImageShowCaser, Googlemap },
    mounted () {
        window.scrollTo(0, 0);
        document.title = "Contact Us | " + this.$hostname;
  }
};
</script>