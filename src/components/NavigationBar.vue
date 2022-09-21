<template>
  <nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid">
      <div class="row outline2">
        <div class="col-md-9 mx-auto outline">
          <div class="row">
            <div class="col-sm-3 mx-0 outline">
              <div class="row">
                <div id="navbar-logo-container mx-0" class="col-sm-auto col-10">
                  <img
                    class="navbar-brand m-0"
                    id="navbar-brand-logo"
                    src="@/assets/rml-med.png"
                  />
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
                  <NavigationBarContent></NavigationBarContent>
                </div>
                <div id="navbar-bottom-content" class="col-12 outline">
                  column
                </div>
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
import NavigationBarContent from "@/components/NavigationBarContent.vue";

export default {
  name: "NavigationBar",
  components: {
    NavigationBarContent,
  },
};
</script>
