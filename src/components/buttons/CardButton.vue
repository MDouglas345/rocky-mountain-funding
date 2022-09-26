<template>
    
        <router-link :to="content.link" class="">
        <span class="material-icons home-card-button">
                {{content.button}}
            </span> 
        </router-link>

</template>

<script>
    export default {
        name : "CardButton",
        props : {
            content : {
                type : Object
            }
        }
    };
</script>