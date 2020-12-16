<template>
  <div>
    <slider :slides="slides"></slider>
    <booking></booking>
    <div class="container mt-5" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row">
        <div class="col-12"><h2 class="text-center">Hotel Villa Maria</h2></div>
      </div>
      <div class="row mt-5">

        <div class="col-md-3">
          <p class="text-center">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          </p>
          <p class="text-center">Via SS. Trinità, 84010 <br>Ravello (SA) Italy</p></div>
        <div class="col-md-3">
          <p class="text-center">
            <font-awesome-icon :icon="['fas', 'phone']"/>
          </p>
          <p class="text-center"> Tel: +39.089.857255<br> Fax: +39.089.857071</p></div>

        <div class="col-md-3">
          <p class="text-center">
            <font-awesome-icon :icon="['fas', 'globe']"/>
          </p>
          <p class="text-center">www.villamaria.it <br>info@villamaria.it</p></div>
        <div class="col-md-3">
          <p class="text-center">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          </p>
          <p class="text-center">Facebook<br> Instagram</p></div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "contacts",
        data() {
            return {
                slides: [
                    require(`~/assets/images/slider-contacts-01.jpg`),
                    require(`~/assets/images/slider-contacts-02.jpg`)
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
  h2 {
    color: var(--primary-color);
  }
</style>
