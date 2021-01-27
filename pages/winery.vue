<template>
  <div>
    <booking-small></booking-small>
    <slider :slides="slides"></slider>

    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{$t('title.winery')}}</h1>
          <div v-html="$t('winery.block')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "winery",
    data() {
      return {
        slides: [
          require(`~/assets/images/slider-winery-01.jpg`),
          require(`~/assets/images/slider-winery-02.jpg`),
          require(`~/assets/images/slider-winery-03.jpg`)
        ]
      }
    }
  }
</script>

<style scoped>

</style>
