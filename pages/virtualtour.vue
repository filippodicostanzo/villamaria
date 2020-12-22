<template>
  <div>


    <slider :slides="slides"></slider>

    <booking></booking>

    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">virtual tour</h1>
          <div class="two-columns">
            <p class=" text-justify">Sorge in pieno centro storico tra il Monastero delle Clarisse ed il Convento di S.
              Francesco, in una zona
              signorile e di estrema tranquillità, raggiungibile unicamente a piedi (a circa 10 minuti dalla piazza
              principale del paese).</p>

            <p class="text-justify"> Villa Maria garantisce agli ospiti, oltre alla massima tranquillità, anche il
              massimo servizio grazie al
              parcheggio del vicino Hotel Giordano (della stessa proprietà) dove è possibile sistemare la propria auto e
              usufruire del trasporto bagagli in camera.</p>
          </div>
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
