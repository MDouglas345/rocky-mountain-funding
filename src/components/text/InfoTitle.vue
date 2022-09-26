<template>
    <div v-bind="content.details">
        <h1 v-bind="content.header.details">{{content.header.value}}</h1>
        <h5 v-bind="content.subheader.details">{{content.subheader.value}}</h5>
        <p v-bind="content.note.details">{{content.note.value}}</p>
    </div>
</template>

<script>
    export default {
        name : "InfoTitle",
        props : {
            content : {
                type : Object
            }
        }
    };
</script>