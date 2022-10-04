<template>
    
    <router-link v-if="content.link!=null" :to="content.link" class="">
        <span class="material-icons home-card-button text-primary">
            {{content.button}}
        </span> 
    </router-link>

    <a v-if="content.externallink!=null" :href="content.externallink" class="">
        <span class="material-icons home-card-button text-primary">
            {{content.button}}
        </span> 
    </a>

    <a v-if="content.locallink!=null" href="#" @click.prevent="goToSection(content.locallink)">
        <span class="material-icons home-card-button text-primary">
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
        },
        methods : {
            goToSection(value) {
                console.log(value);
                const top = document.getElementById(value).scrollIntoView({

                    behavior: 'smooth'});
            }
        }
    };
</script>