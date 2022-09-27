<template>
    <div class = "row position-absolute mx-auto">
        <div class ="col-lg-8 col-md-12 col-12 mx-auto">
            <span>
                <h1 class = "display-4 fw-bolder text-secondary text-start homeoverlay-text" >{{content.header}}</h1>
            </span>
        </div>
        <div class ="col-lg-8 col-md-12 col-12 mx-auto">
            <div class = "row">
                <div class = "col-8 justify-content-start">
                     <span>
                        <p class = "d-flex text-secondary text-start mb-5 homeoverlay-text">{{content.subheader}}</p>
                    </span>
                    <button type = "button" class = "d-flex btn btn-primary mb-5 homeoverlay-text">
                        <router-link to="/ApplyNow" class="nav-link text-secondary homeoverlay-text">View Your Options</router-link>
                    </button>
                    <span>
                        <h6 class = "text-secondary d-flex mb-5">{{content.note}}</h6>
                    </span>
                </div>
                <div class = "col-3 homeoverlay-text">
                    <div class = "row">
                        <div class = "col-12">
                            <span>
                                <h1 class = "display-1 fw-bolder text-secondary">{{content.stat.val}}</h1>
                            </span>
                        </div>
                        <div class = "col-12">
                            <h6 class = "h4  fw-bolder text-secondary">{{content.stat.label}}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "HomeOverlay",
        props : {
            content : {
                type : Object
            }
        }
    };
</script>