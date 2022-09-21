<template>
  <nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid">
      <div class="row outline2">
        <div class="col-lg-9 col-md-12 mx-auto outline">
          <div class="row">
            <div class="col-sm-3 mx-0 outline">
              <div class="row">
                <div id="navbar-logo-container mx-0" class="col-sm-auto col-10">
                  <router-link :to="NavbarData.logo.to">
                    <img
                      class="navbar-brand m-0"
                      id="navbar-brand-logo"
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
            <div class="col-sm-9 outline">
              <div class="row">
                <div id="navbar-top-content" class="col-12 outline">
                  <NavigationBarContentDynamic :NavbarContent="NavbarData.items"></NavigationBarContentDynamic>
                </div>
                <div id="navbar-bottom-content" class="col-12 outline"></div>
                <NavbarPhone></NavbarPhone>
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
