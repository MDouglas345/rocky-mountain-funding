<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div
      id="navbar-items-holder"
      class="navbar-nav mb-2 mb-lg-0 my-auto row "
    >
        <div v-for="(item,index) in NavbarContent" v-bind="item.tags">
            <router-link v-bind:to=item.url v-bind=item.linktags >{{item.name}}</router-link>
            <NavigationBarDropDownDynamic :NavbarDropdownContent=item></NavigationBarDropDownDynamic>
        </div>
    </div>
  </div>
</template>

<script>
import NavigationDropDown from "./NavigationDropDown.vue";
import NavigationBarDropDownDynamic from "./NavigationBarDropDownDynamic.vue";

export default {
  name: "NavigationBarContentDynamic",
  props:{
    NavbarContent :{
      type : Object
    }
  },
  components: {
    NavigationDropDown,
    NavigationBarDropDownDynamic
},
};
</script>
