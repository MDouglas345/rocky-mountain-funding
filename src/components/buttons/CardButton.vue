<template>
    
    <router-link v-if="content.externallink==null" :to="content.link" class="">
        <span class="material-icons home-card-button">
            {{content.button}}
        </span> 
    </router-link>

    <a v-if="content.externallink!=null" :href="content.externallink" class="">
        <span class="material-icons home-card-button">
            {{content.button}}
        </span> 
    </a>

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