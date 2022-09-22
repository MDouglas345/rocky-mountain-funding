<template>
    <div
    v-if="NavbarDropdownContent.columns != 0"
    id="navbar-drodown-container"
    class="dropdown-menu mt-0 col-md-12"
    aria-labelledby="navbarDropdown"
    style="border-top-left-radius: 0; border-top-right-radius: 0"
  >
    <div class="row w-100 h-100">
        <div class="col-md-12 outline2 mx-auto">
            <div class="row">
                <div v-for="(column,index) in NavbarDropdownContent.menu" :class="`col-sm-auto`">
                    <p v-for="(item,index) in column" class="dropdown-item">{{item.name}}</p>
                </div> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: "NavigationBarDropDownDynamic",
     props:{
        NavbarDropdownContent :{
            type : Object
        }
    },
};
</script>