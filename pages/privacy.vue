<template>
  <div class="container mt-5" data-aos="zoom-in" data-aos-duration="1000">
    <div class="row">
      <div class="col-12"><h2 class="text-center text-uppercase">{{$t('title.privacy')}}</h2></div>
    </div>
    <div class="row mt-5">
        <div class="col-12">
          <div v-html="$t('privacy.block')"></div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "privacy"
  }
</script>

<style scoped>

</style>
