<template>
  <div>
    <booking-small></booking-small>
    <slider :slides="slides"></slider>

    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{$t('title.restaurant')}}</h1>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <h4 class="text-center text-uppercase">{{$t('restaurant.title_1')}}</h4>
          <div class="image-restaurant"
               :style="{'background-image': 'url('+require(`~/assets/images/box-restaurant-01.jpg`)+')'}"></div>
          <p class="text-justify">{{$t('restaurant.block_1')}}</p>
        </div>

        <div class="col-md-6">
          <h4 class="text-center text-uppercase">{{$t('restaurant.title_2')}}</h4>
          <div class="image-restaurant"
               :style="{'background-image': 'url('+require(`~/assets/images/box-restaurant-02.jpg`)+')'}"></div>
          <p class="text-justify">{{$t('restaurant.block_2')}}</p>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-md-6">
          <h4 class="text-center text-uppercase">{{$t('restaurant.title_3')}}</h4>
          <div class="image-restaurant"
               :style="{'background-image': 'url('+require(`~/assets/images/box-restaurant-03.jpg`)+')'}"></div>
          <p class="text-justify">{{$t('restaurant.block_3')}}</p>
        </div>
        <div class="col-md-6">
          <h4 class="text-center text-uppercase">{{$t('restaurant.title_4')}}</h4>
          <div class="image-restaurant"
               :style="{'background-image': 'url('+require(`~/assets/images/box-restaurant-04.jpg`)+')'}"></div>
          <p class="text-justify">{{$t('restaurant.block_4')}}</p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <div v-html="$t('restaurant.block_5')"></div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <div v-html="$t('restaurant.block_6')"></div>
        </div>
        <div class="col-md-6">

          <div v-html="$t('restaurant.block_7')"></div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <div v-html="$t('restaurant.block_8')"></div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">gallery</h1>
        </div>
      </div>

      <gallery gallery="restaurant"></gallery>


    </div>

  </div>
</template>

<script>


  import Gallery from "../components/Gallery";

  export default {
    name: "restaurant",
    components: {
      'gallery': Gallery
    },

    data() {
      return {
        items: [],
        slides: [
          require(`~/assets/images/slider-restaurant-01.jpg`),
          require(`~/assets/images/slider-restaurant-02.jpg`),
          require(`~/assets/images/slider-restaurant-03.jpg`)
        ],
        lgOptions: {
          mode: 'lg-fade',
          thumbnail: true,
          animateThumb: false,
          showThumbByDefault: false,
          selector: '.col-md-4'
        },
        gallery: [
          require(`~/assets/images/gallery/restaurant-01.jpg`),
          require(`~/assets/images/gallery/restaurant-02.jpg`),
          require(`~/assets/images/gallery/restaurant-03.jpg`),
          require(`~/assets/images/gallery/restaurant-04.jpg`),
          require(`~/assets/images/gallery/restaurant-05.jpg`)
        ]
      }
    },
    mounted() {
      this.createGallery();
    },
    methods: {
      async createGallery() {
        var cache = {};
        const images = require.context('../static/images/gallery/restaurant/', false, /\.jpg$/);
        var imagesArray = Array.from(images.keys());
        var constructed = [];
        this.items = this.constructItems(imagesArray, constructed);
        const el = document.getElementById('lightgallery', this.lgOptions);
        setTimeout(() => {
          window.lightGallery(el)
        }, 100);
      },

      constructItems(fileNames, constructed) {
        fileNames.forEach(fileName => {
          constructed.push({
            'src': '/images/gallery/restaurant' + fileName.substr(1)
          })
        });
        return constructed;
      }
    }
  }
</script>

<style scoped lang="scss">
  .lg-thumbnails {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
  }

  ;
  .image-restaurant {
    height: 200px;
    background-size: cover;
    margin: 20px 0;
    background-position: center;
  }
</style>
