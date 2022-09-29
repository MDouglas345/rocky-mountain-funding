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
                        <p class = "h4 fw-bold text-secondary text-start mb-lg-5 mb-sm-1">{{content.subheader}}</p>
                    </span>
                </div>
                <div class = "col-12 st-note">
                    <p class="text-secondary text-start">{{content.note}}</p>
                </div>

                <div class="row mb-3 mt-3">
                    <div class="col-5 col-sm-4 col-lg-2">
                        <button class="btn btn-primary p-3"><router-link to="/applynow" class="nav-link text-secondary">Apply Now</router-link></button>
                    </div>
                </div>
                <div v-if="isMobile() === false" class="row">
                    <NoteText :content="content"></NoteText>
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