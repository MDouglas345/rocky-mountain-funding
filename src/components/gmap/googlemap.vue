<template>
    <iframe :width="content.width" :height="content.height" :style="content.style" loading="lazy" :src="content.src"></iframe>
</template>

<script>
    export default {
        name : "GoogleMap",
        props : {
            content : {
                type : Object
            }
        }

    };
</script>