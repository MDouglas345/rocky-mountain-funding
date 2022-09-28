<template>
    <ol class = "OuterStepList">
        <li v-for="(item,index) in content.data">
            <div class ="">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" role="presentation" aria-hidden="true">
                    <g>
                        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                    </g>
                </svg>
                {{item.name}}
            </div>
            <ul class="InnerStepList">
                <li v-for="(step,index) in item.data">{{step.name}}</li>
            </ul>
        </li>
    </ol>
</template>

<script>
    export default {
        name : "StepsWithDetails",
        props : {
            content : {
                type : Object
            }
        }
    };
</script>