<template>
    <div
    v-if="NavbarDropdownContent.columns != 0"
    id="navbar-drodown-container"
    class="dropdown-menu mt-0 col-sm-12 mx-auto"
    aria-labelledby="navbarDropdown"
    style="border-top-left-radius: 0; border-top-right-radius: 0"
  >
    <div class="row w-100 h-100">
        <div class="col-md-12 outline2 mx-auto">
            <div class="row">
                <div v-for="(column,index) in NavbarDropdownContent.menu" :class="`col-md-`+(12/NavbarDropdownContent.columns)+ ` col-12`">
                    <router-link @click="collapseNav()" v-for="(item,index) in column" class="dropdown-item px-0" v-bind="item.tag">{{item.name}}</router-link>
                </div> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import $ from "jquery";
    export default {
    name: "NavigationBarDropDownDynamic",
     props:{
        NavbarDropdownContent :{
            type : Object
        }
    },
    methods : {
        collapseNav(){
             $('#navbarSupportedContent').removeClass('show').addClass('hide');
    }
    }
};
</script>