<template>
  <div>
    <booking-small></booking-small>
    <slider :slides="slides"></slider>


    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{$t('title.history')}}</h1>
          <div v-html="$t('history.block')"></div>


        </div>
      </div>
    </div>

  </div>

</template>

<script>

    export default {

        data() {
            return {
                slides: [
                    require(`~/assets/images/slider-history-01.jpg`),
                    require(`~/assets/images/slider-history-02.jpg`),
                    require(`~/assets/images/slider-history-03.jpg`)

                ]
            }
        }
    }
</script>

<style scoped>

</style>
