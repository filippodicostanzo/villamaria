<template>
  <div data-aos="fade-in" class="showcase mt-10">
    <VueSlickCarousel v-bind="slickOptions">
      <div class="carousel">
        <a href="https://www.villa-eva.it" target="_blank">
          <img :src="require(`~/assets/images/villaeva-light.png`)" v-if="this.$colorMode.preference === 'light'">
          <img :src="require(`~/assets/images/villaeva-dark.png`)" v-if="this.$colorMode.preference === 'dark'">
        </a>
      </div>

      <div class="carousel">
        <a href="https://www.giordanohotel.it" target="_blank">
          <img :src="require(`~/assets/images/giordano-light.png`)" v-if="this.$colorMode.preference === 'light'">
          <img :src="require(`~/assets/images/giordano-dark.png`)" v-if="this.$colorMode.preference === 'dark'">
        </a>
      </div>


      <div class="carousel">
        <a href="http://www.cookingravello.com/" target="_blank">
          <img :src="require(`~/assets/images/nonnaorsola-light.png`)" v-if="this.$colorMode.preference === 'light'">
          <img :src="require(`~/assets/images/nonnaorsola-dark.png`)" v-if="this.$colorMode.preference === 'dark'">
        </a>
      </div>

      <div class="carousel">
        <a href="https://www.wagnertours.it/" target="_blank">
          <img :src="require(`~/assets/images/wagnertours-light.png`)" v-if="this.$colorMode.preference === 'light'">
          <img :src="require(`~/assets/images/wagnertours-dark.png`)" v-if="this.$colorMode.preference === 'dark'">
        </a>
      </div>

      <div class="carousel">
        <a href="#" target="_blank">
          <img :src="require(`~/assets/images/boutique-light.png`)" v-if="this.$colorMode.preference === 'light'">
          <img :src="require(`~/assets/images/boutique-dark.png`)" v-if="this.$colorMode.preference === 'dark'">
        </a>
      </div>

    </VueSlickCarousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        slickOptions: {
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 6000,
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 959,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss">

  .showcase {
    .carousel {

      img {
        width: 80%;
        margin: 0 auto;
        max-width: 300px;
      }
    }
  }

</style>
