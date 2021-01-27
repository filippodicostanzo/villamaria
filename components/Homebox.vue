<template>
  <div>
    <div class="container-fluid pl-0 pr-0 mt-10">
      <div class="row no-gutters flex-md-row-reverse align-items-center" data-aos="fade-left">
        <div class="col-md-6 image-box"
             :style="{'background-image': 'url(' + require(`~/assets/images/box-home-suite.jpg`) + ')'}">
        </div>
        <div class="col-md-6 text-box  p-5" data-aos="fade-right"><h2>{{$t('homebox.block_1.title')}}</h2>
          <p>{{$t('homebox.block_1.desc')}} </p>
          <p>
            <nuxt-link class="btn btn-darkred" :to="localePath('rooms')" tag="a">{{$t('homebox.readmore')}}</nuxt-link>
          </p>
        </div>
      </div>
    </div>


    <div class="container-fluid pl-0 pr-0">
      <div class="row no-gutters align-items-center" data-aos="fade-right">
        <div class="col-md-6 image-box"
             :style="{'background-image': 'url(' + require(`~/assets/images/box-home-restaurant.jpg`) + ')'}">
        </div>
        <div class="col-md-6 text-box p-5" data-aos="fade-left"><h2>{{$t('homebox.block_2.title')}}</h2>
          <p>{{$t('homebox.block_2.desc')}} </p>

          <p>
            <nuxt-link class="btn btn-darkred" :to="localePath('restaurant')" tag="a">{{$t('homebox.readmore')}}</nuxt-link>
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid pl-0 pr-0">
      <div class="row no-gutters flex-md-row-reverse align-items-center" data-aos="fade-left">
        <div class="col-md-6 image-box"
             :style="{'background-image': 'url(' + require(`~/assets/images/box-home-winery.jpg`) + ')'}">
        </div>
        <div class="col-md-6 text-box p-5" data-aos="fade-right"><h2>{{$t('homebox.block_3.title')}}</h2>
          <p>{{$t('homebox.block_3.desc')}} </p>
          <p><a class="btn btn-darkred" href="http://www.lacantinadifranceschino.it" target="_blank">{{$t('homebox.readmore')}}</a>
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid pl-0 pr-0">
      <div class="row no-gutters align-items-center" data-aos="fade-right">
        <div class="col-md-6 image-box"
             :style="{'background-image': 'url(' + require(`~/assets/images/box-home-wedding.jpg`) + ')'}">
        </div>
        <div class="col-md-6 text-box p-5" data-aos="fade-left"><h2>{{$t('homebox.block_4.title')}}</h2>
          <p>{{$t('homebox.block_4.desc')}} </p>
          <p><a class="btn btn-darkred" href="http://www.villa-eva.it" target="_blank">{{$t('homebox.readmore')}}</a></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Homebox"
  }
</script>

<style lang="scss" scoped>
  .image-box {
    height: 700px;
    background-size: cover;
    background-position: center;
  }

  .flex-md-row-reverse {
    .text-box {
      max-width: 570px;
      float: right;

      h2, p {
        text-align: right;
      }
    }
  }

  :not(.flex-md-row-reverse) {
    .text-box {
      max-width: 570px;
      float: left;
      text-align: left;
    }
  }

</style>
