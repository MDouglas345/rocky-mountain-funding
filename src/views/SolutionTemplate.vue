<template>
    <ImageShowCaser :slides="siteData[$route.name].slides"></ImageShowCaser>
    <div class ="container-fluid">
        <div class = "row justify-content-center text-start">
            <div class = "col-lg-8 col-md-12">
                <div v-if="isMobile() ===true" class = "p5">
                    <NoteText :content="siteData[$route.name].slides[0].OverlayContent.data"></NoteText>
                </div>
                <h2 class="display-6 mb-5">{{siteData[$route.name].header}}</h2>
                <StepsWithDetails :content=siteData[$route.name].list></StepsWithDetails>
                <div class ="row justify-content-center text-center mb-5">
                    <div class="col-6">
                        <h1 class="display-4">Apply Now</h1>
                        <button class="btn btn-primary">
                            <router-link to="/applynow" class="nav-link text-secondary">Application Form</router-link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <component v-for="(item,index) in siteData[$route.name].content" :is="item.element" v-bind="item.element_details"></component>
</template>

<script>
import ImageShowCaser from '@/components/imageshowcaser/ImageShowCaser.vue';
import StepsWithDetails from '@/components/list/StepsWithDetails.vue';
import BaseDivider from '@/components/dividers/BaseDivider.vue';
import InfoLayout from '@/components/layouts/InfoLayout.vue';
import NoteText from '@/components/text/NoteText.vue';

    export default {
        name : "SolutionTemplate",
        props : {
            siteData : {
                type : Object
            }
        },
        components : {
    ImageShowCaser,
    StepsWithDetails,
    BaseDivider,
    InfoLayout,
    NoteText
},
methods : {
        isMobile(){
            console.log(window.innerWidth);
            return window.innerWidth < 568;
        }
    }

    };
</script>