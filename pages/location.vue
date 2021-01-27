<template>
  <div>

    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{$t('title.howtoreachus')}}</h1>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4 class="text-capitalize text-center">{{$t('howtoreachus.block_1')}}</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZoqOsClsxG8" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="col-md-6">
            <h4 class="text-capitalize text-center">{{$t('howtoreachus.block_2')}}</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VPX5tBCMUqw" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{$t('title.whereweare')}}</h1>
          <div v-html="$t('howtoreachus.block_3')"></div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <GMap
        ref="gMap"
        language="en"
        :cluster="{options: {styles: clusterStyle}}"
        :center="{lat: locations[0].lat, lng: locations[0].lng}"
        :options="{fullscreenControl: false, styles: mapStyle}"
        :zoom="13"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{lat: location.lat, lng: location.lng}"
          @click="currentLocation = location"
        >
          <!-- :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"-->

          <GMapInfoWindow :options="{maxWidth: 300}">

            <h4>Hotel Villa Maria</h4>
            <p>Ravello</p>

          </GMapInfoWindow>
        </GMapMarker>
        <GMapCircle :options="circleOptions"/>
      </GMap>
    </div>

  </div>

</template>

<script>
    export default {
        name: "location",
        data() {
            return {
                slides: [
                    require(`~/assets/images/slider-location-01.jpg`),
                    require(`~/assets/images/slider-location-02.jpg`)
                ],
                currentLocation: {},
                circleOptions: {},
                locations: [
                    {
                        lat: 40.646778,
                        lng: 14.6103707
                    },
                ],/*
                pins: {
                    selected: "data:image/png;base64,iVBORw0KGgo...",
                    notSelected: "data:image/png;base64,iVBORw0KGgo..."
                },*/
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
  .GMap__Wrapper {
    height: 600px;
  }
  .GMap__InfoWindow {
    h4, p {
      text-align: center;
      color: var(--primary-color);
    }
  }
</style>
