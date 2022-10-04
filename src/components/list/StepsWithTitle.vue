<template>
    <ol class = "OuterStepList text-start">
        <li v-for="(item,index) in content.data">
            <div class =" OuterStepLabel d-flex justify-content-start">
                <div class ="OuterStepNumtitle position-relative">
                
                    <p class="position-relative"></p>
                </div>
                <p class="my-auto ms-4 fw-bold h3">{{item.name}}</p>
            </div>
            <div class = "" v-html="item.data">

            </div>
        </li>
    </ol>
</template>

<script>
    export default {
        name : "StepsWithTitle",
        props : {
            content : {
                type : Object
            }
        }
    };
</script>