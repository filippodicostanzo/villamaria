<template>

    <div data-aos="fade-in" class="slider" v-if="slides.length>0">
      <VueSlickCarousel v-bind="slickOptions">
        <div class="carousel" v-for="slide in slides"
             :style="{'background-image': 'url(' + slide + ')'}"></div>
      </VueSlickCarousel>
    </div>
</template>

<script>
    export default {
        name: "Slider.vue",
        props: ['slides'],
        data() {
            return {

                slickOptions: {
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 6000,
                    arrows: true,
                    dots: true,
                    fade: true,
                }

            }
        },

    }
</script>

<style lang="scss">
.slider {
  .slick-prev {
    left: 40px;
    z-index: 9;
    width: 40px;
    height: 40px;

    &:before {
      font-size: 40px;
    }
  }

  .slick-next {
    right: 40px;
    z-index: 9;
    width: 40px;
    height: 40px;

    &:before {
      font-size: 40px;
    }
  }

  .slick-slide {
    height: 900px !important;
  }

  .carousel {
    height: 900px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}

</style>
