<template>
  <div>
    <booking-small></booking-small>
    <slider :slides="slides"></slider>
    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">breakfast</h1>
          <div v-html="$t('breakfast.block')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "breakfast",
        data() {
            return {
                slides: [
                    require(`~/assets/images/slider-breakfast-01.jpg`),
                    require(`~/assets/images/slider-breakfast-02.jpg`),
                    require(`~/assets/images/slider-breakfast-03.jpg`),
                    require(`~/assets/images/slider-breakfast-04.jpg`),
                    require(`~/assets/images/slider-breakfast-05.jpg`),
                    require(`~/assets/images/slider-breakfast-06.jpg`)
                ]
            }
        }
    }
</script>

<style scoped>

</style>
