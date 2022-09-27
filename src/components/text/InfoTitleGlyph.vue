<template>
    <div v-bind="content.details">
        <span v-bind="content.header.details">{{content.header.value}}</span>
        <h5 v-bind="content.subheader.details">{{content.subheader.value}}</h5>
        <p v-bind="content.note.details">{{content.note.value}}</p>
    </div>
</template>

<script>
    export default {
        name : "InfoTitleGlyph",
        props : {
            content : {
                type : Object
            }
        }
    };
</script>