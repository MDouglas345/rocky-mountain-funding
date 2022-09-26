<template>
    <div class = "row home-info-button">
        <div v-bind="content.cont_details">
            <div class = "row justify-content-center">
                <div class ="col-4">
                    <CustomImg :imagedata="content.image"></CustomImg>
                </div>
                <div class = "col-12">
                    <button class ="btn btn-primary">
                        <router-link v-bind="content.button.details">{{content.button.value}}</router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomImg from '../customimg/CustomImg.vue';
    export default{
    name: "ButtonWithImage",
    props: {
        content: {
            type: Object
        }
    },
    components: { CustomImg }
};
</script>