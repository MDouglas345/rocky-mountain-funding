<template>
    <div class = "row position-absolute mx-auto">
        <div class = "col-lg-9 col-md-10 col-10 mx-auto">
            <div class="row">
                <div class = "col-12 st-header">
                    <span>
                        <p class = "display-3 fw-bold text-secondary text-start mt-5">{{content.header}}</p>
                    </span>
                </div>
                <div class = "col-8 upper-border"></div>
                <div class = "col-12 st-subheader">
                    <span>
                        <p class = "h4 fw-bold text-secondary text-start mb-lg-5 mb-md-4 mb-sm-3">{{content.subheader}}</p>
                    </span>
                </div>
                <div class = "col-12 st-note">
                    <p class="text-secondary text-start">{{content.note}}</p>
                </div>

                <div class="row mb-3 mt-3">
                        <router-link to="/applynow" class="nav-link text-secondary">
                            <button class="btn btn-primary p-3 d-flex btn btn-primary mb-3 homeoverlay-text testimonial-text-overlay w-auto text-secondary">
                            Apply Now
                            </button>
                        </router-link>
                    
                
                    <div class = "col-12">
                        <NoteText  v-if="isMobile() === false" :content="content"></NoteText>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NoteText from '@/components/text/NoteText.vue';
    export default {
        name : "SolutionsTemplateOverlay",
        props : {
            content : {
                type : Object
            }
        },
        methods : {
        isMobile(){
            console.log(window.innerWidth);
            return window.innerWidth < 568;
        },
        
        },
        components : {
    NoteText,
    
}
    };
</script>