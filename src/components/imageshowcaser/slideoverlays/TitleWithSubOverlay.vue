<template>
    <div class = "row position-absolute mx-auto my-auto w-100 lower-overlay">
        <div class = "col-lg-8 col-md-9 col-10 mx-auto my-auto">
            <div class="row">
                <div class="col-12 mt-5">
                    <div class = "TWSheader-container homeoverlay-text">
                        <span>
                            <h1 class="display-3 fw-bold text-secondary text-start ">{{content.header}}</h1>
                        </span>
                    </div>
                </div>
                <div class="col-12">
                    <div class = "TWSsubheader-container text-start homeoverlay-text">
                        <span>
                            <h1 class="h3 fw-bold text-secondary ">{{content.subheader}}</h1>
                        </span>
                        <span>
                            <p class="text-secondary">{{content.note}}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NoteText from '@/components/text/NoteText.vue';
    export default {
        name : "TitleWithSubOverlay",
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