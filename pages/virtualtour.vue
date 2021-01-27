<template>
  <div>
    <booking-small></booking-small>


    <slider :slides="slides"></slider>


    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{$t('title.virtualtour')}}</h1>
          <div v-html="$t('virtualtour.block')"></div>
        </div>
      </div>
    </div>

    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5 video-container">
        <div class="col-md-12">
          <iframe src="https://www.youtube.com/embed/ZQDo_XUCpOM?rel=0" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen class="video"></iframe>

        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">gallery</h1>
        </div>
      </div>

      <gallery gallery="virtual-tour"></gallery>

    </div>


  </div>

</template>

<script>
  export default {
    name: "virtaultour",
    data() {
      return {
        slides: [
          require(`~/assets/images/slider-virtualtour-01.jpg`),
          require(`~/assets/images/slider-virtualtour-02.jpg`),
          require(`~/assets/images/slider-virtualtour-03.jpg`)
        ],
        currentLocation: {},
        circleOptions: {},
        locations: [
          {
            lat: 44.933076,
            lng: 15.629058
          },
          {
            lat: 45.815,
            lng: "15.9819"
          },
          {
            lat: "45.12",
            lng: "16.21"
          }
        ],
        pins: {
          selected: "data:image/png;base64,iVBORw0KGgo...",
          notSelected: "data:image/png;base64,iVBORw0KGgo..."
        },
        mapStyle: [],
        clusterStyle: [
          {
            url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
            width: 56,
            height: 56,
            textColor: "#fff"
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .video-container {
    width: auto;
    height: 45vh;

    .video {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
