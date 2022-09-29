<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div
      id="navbar-items-holder"
      class="navbar-nav mb-2 mb-lg-0 my-auto row "
    >
        <div v-for="(item,index) in NavbarContent" v-bind="item.tags">
          <div class = "d-flex justify-content-center position-relative">
              <router-link @click="collapseNav()" v-bind:to=item.url v-bind=item.linktags >{{item.name}}</router-link>
              <a v-if="isMobile() && item.menu.length != 0" @click="toggleDropdown()" class="dropdown-toggler-caret">
                <span class="material-icons">arrow_drop_down</span>
              </a>
            </div>
            <NavigationBarDropDownDynamic :NavbarDropdownContent=item></NavigationBarDropDownDynamic>
        </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
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
methods : {
  collapseNav(){
    $('#navbarSupportedContent').removeClass('show').addClass('hide');
  },
  isMobile(){
    return window.innerWidth < 768;
  },
  toggleDropdown(){
    $('#navbar-drodown-container').toggle();
  }
}
};
</script>
