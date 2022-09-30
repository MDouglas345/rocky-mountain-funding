<template>
    <div class="container-fluid">
       <iframe src="https://www.myrmapp.com/apply-now/whernandez?step=CONTACT_INFORMATION&mode=iframe" width="100%" height="1030px" name="pmfApplyFrame" allow="clipboard-read; clipboard-write" style="border: 0px; border-radius: 3px;"></iframe>
    </div>
</template>

<script>
    export default {
        name  : "ApplyNow",
        mounted () {
    window.scrollTo(0, 0);
    document.title = "Apply Now | " + this.$hostname;
  }
    };
</script>