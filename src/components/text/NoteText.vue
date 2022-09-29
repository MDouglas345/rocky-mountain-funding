<template>
    <div class="col-12 col-md-6 col-lg-4 bg-primary st-note2-container">
            <span><p class="h5 fw-bold text-secondary text-start">Contact us to learn more about {{content.name}}</p></span>
            <span><p class="text-secondary text-start">{{content.note2}}</p></span>
    </div>
</template>


<script>
    export default {
        name : "NoteText",
        props : {
            content : {
                type : Object
            }
        }
    };
</script>