<template>
  <div class="row justify-content-end">
    <div id="phone-container" class="col-md-auto">
      <button type="button w-100 call-to-action" class="btn btn-primary">
        <a :href="`tel:`+NavbarPhoneData.tel"
          ><p class="h6 color-secondary m-0">
            {{NavbarPhoneData.display + NavbarPhoneData.tel}}
            <i class="material-icons color-secondary vertical-align-m"
              >phone_in_talk</i
            >
          </p>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarPhone",
  props : {
    NavbarPhoneData :{
      type : Object
    }
  }
};
</script>
