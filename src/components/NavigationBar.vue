<template>
  <nav id = "navbar container" class="navbar navbar-expand-md bg-white">
    <div class="container-fluid">
      <div class="row outline2 mx-auto">
        <div class="col-lg-8 col-md-12 mx-auto outline">
          <div class="row">
            <div class="col-md-3 mx-0 outline">
              <div class="row">
                <div id="navbar-logo-container mx-0" class="col-md-auto col-10">
                  <router-link :to="NavbarData.logo.to">
                    <img
                      class="navbar-brand m-0 image-fit"
                      
                      v-bind:src="require(`@/assets/${NavbarData.logo.url}`)"

                    />
                  </router-link>
                </div>
                <div class="col-2">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-9 outline">
              <div class="row">
                <div id="navbar-top-content" class="col-12 outline">
                  <NavigationBarContentDynamic :NavbarContent="NavbarData.items"></NavigationBarContentDynamic>
                </div>
                <div id="navbar-bottom-content" class="col-12 outline"></div>
                <NavbarPhone :NavbarPhoneData = NavbarData.phone></NavbarPhone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from "jquery";

import NavbarPhone from "./NavbarPhone.vue";
import NavigationBarContentDynamic from "./NavigationBarContentDynamic.vue";

export default {
  name: "NavigationBar",
  props: {
    NavbarData: {
      type: Object,
    },
  },
  components: {
    NavbarPhone,
    NavigationBarContentDynamic
},
};
</script>
