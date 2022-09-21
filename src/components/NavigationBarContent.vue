<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul
      id="navbar-items-holder"
      class="navbar-nav me-auto mb-2 mb-lg-0 my-auto"
    >
      <li class="nav-item">
        <router-link to="/" class="nav-link active" aria-current="page" href="#"
          >Home</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link
          to="/applynow"
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Solutions
        </router-link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <router-link to="/applynow" class="nav-link" href="#"
          >Apply Now</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/erc" class="nav-link" href="#">ERC</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/resources" class="nav-link" href="#"
          >Resources</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/creditportal" class="nav-link" href="#"
          >Credit Portal</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import NavigationDropDown from "./NavigationDropDown.vue";
export default {
  name: "NavigationBarContent",
  components: {
    NavigationDropDown,
  },
};
</script>
