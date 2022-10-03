<template>
    <div v-bind="content.details">
        <h1 v-bind="content.header.details">{{content.header.value}}</h1>
        <p  v-bind="content.subheader.details">{{content.subheader.value}}</p>
        <p v-if="content.subheader.html =! null" v-bind="content.subheader.details" v-html="content.subheader.text"></p>
    </div>
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