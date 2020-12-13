<template>
  <div class="container">
    <h1 class="text-center">Insta Feed</h1>

    <!-- Place <div> tag where you want the feed to appear -->
    <div id="curator-feed-mysuru-layout" class="pt-3 mt-5">
      <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    /* curator-feed-mysuru-layout */
      var i,
        e,
        d = document,
        s = "script";
      i = d.createElement("script");
      i.async = 1;
      i.src =
        "https://cdn.curator.io/published/0e9465c6-8fee-4f6e-b369-b2fc333606cc.js";
      e = d.getElementsByTagName(s)[0];
      e.parentNode.insertBefore(i, e);
      this.$emit("hideloader", true);
      this.$emit("hideloader", true);
      this.$emit("hideloader", true);
  },
};
</script>

<style scoped>
h1 {
  margin-top: 10rem;
  font-weight: 900;
  font-size: 5rem !important;
  text-shadow: 1px 3px rgba(0,0,0,0.5);
}

@media only screen and (max-width: 576px) {
  h1 {
    font-size: 3rem !important;
  }
}
</style>