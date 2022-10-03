<template>

        <div class = "card home-card w-100 h-100">

            <div class="card-body p-0">
                <div class = "card-glyph">
                    <span v-bind="content.glyph.bind">{{content.glyph.data}}</span>
                </div>
                <div class="card-title">
                    <h4 class = "Display-3 fw-bold text-primary">{{content.header}}</h4>
                </div>

            <component v-if="content.hasExtra===true" :is="content.extra.type" :content="content.extra.content"></component>
                
            </div>  
        </div>
    
</template>

<script>
    import CardButton from '../buttons/CardButton.vue';
    export default{
        name : "LabelCard",
        props  : {
            content  : {
                type : Object
            }
        },
        components : {
            CardButton   
        }
    };

</script>