<template>
    <div class = "row position-absolute mx-auto mt-5">
        <div class = "col-lg-9 col-md-12 col-12 mx-auto">
            <div class = "row">
                <div class ="col-lg-8 col-md-12 col-12">
                    <span>
                            <p class = "d-flex text-secondary text-start mb-5 homeoverlay-text testimonial-text-overlay h4">{{content.testimonial}}</p>
                    </span>
                
                </div>
                <div class ="col-lg-8 col-md-12 col-12 mt-5">
                    <div class = "row">
                        <div class = "col-8 justify-content-start">
                            <span>
                                <h1 class = "display-2 font-weight-bold text-secondary text-start homeoverlay-text testimonial-text-overlay" >{{content.poi}}</h1>
                            </span>
                            <span>
                                <h6 class = "text-secondary d-flex mb-5 homeoverlay-text testimonial-text-overlay">{{content.poiTitle}}</h6>
                            </span>
                             <router-link to="/testimonials" class="nav-link text-secondary homeoverlay-text">
                                <button type = "button" class = "d-flex btn btn-primary mb-5 homeoverlay-text testimonial-text-overlay text-secondary padded-btn">
                                More Testimonials
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "TestimonialOverlay",
        props : {
            content : {
                type : Object
            }
        }
    };
</script>