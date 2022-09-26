<template>
    
        <h3 class ="Display-3 text-primary">{{content.header}}</h3>
        <p>{{content.subheader}}</p>
    
</template>

<script>
    export default {
        name : "TextTile",
        props : {
            content : {
                type : Object
            }
        },
        components : {


        }
    };
</script>