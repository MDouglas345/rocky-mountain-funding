<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul
      id="navbar-items-holder"
      class="navbar-nav me-auto mb-2 mb-lg-0 my-auto justify-content-center"
    >
        <li v-for="(item,index) in NavbarContent" v-bind="item.tags">
            <router-link v-bind:to=item.url v-bind=item.linktags>{{item.name}}</router-link>
            <NavigationBarDropDownDynamic :NavbarDropdownContent=item></NavigationBarDropDownDynamic>
        </li>
    </ul>
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
