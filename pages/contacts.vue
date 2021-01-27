<template>
  <div>

    <div class="container mt-5" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row">
        <div class="col-12"><h2 class="text-center">Hotel Villa Maria</h2></div>
      </div>
      <div class="row mt-5">

        <div class="col-md-4">
          <p class="text-center text-200">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          </p>
          <p class="text-center text-200">Via S. Chiara, 2 - 84010 <br>Ravello (SA) Italy</p></div>
        <div class="col-md-4">
          <p class="text-center text-200">
            <font-awesome-icon :icon="['fas', 'phone']"/>
          </p>
          <p class="text-center text-200"> Tel: +39.089.857255<br> Fax: +39.089.857071</p></div>

        <div class="col-md-4">
          <p class="text-center text-200">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
          </p>
          <p class="text-center text-200">General Info <br>info@villamaria.it</p>
        </div>

      </div>

      <div class="row mt-5">


        <div class="col-md-4">
          <p class="text-center text-150">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
          </p>
          <p class="text-center text-150">{{$t('contacts.booking')}} <br>booking@villamaria.it</p>
        </div>


        <div class="col-md-4">
          <p class="text-center text-150">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
          </p>
          <p class="text-center text-150">{{$t('contacts.commercial')}} <br>direzione@villamaria.it</p>
        </div>

        <div class="col-md-4">
          <p class="text-center text-150">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
          </p>
          <p class="text-center text-150">{{$t('contacts.management')}} <br>amministrazione@villamaria.it</p>
        </div>

      </div>

      <div class="row mt-5">
        <div class="col-md-4">
          <p class="text-center text-150">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          </p>
          <a href="https://www.facebook.com/VillaMariaRavello" target="_blank">
            <p class="text-center text-150">Facebook</p>
          </a>
        </div>


        <div class="col-md-4">
          <p class="text-center text-150">
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </p>
          <a href="https://www.instagram.com/villamariaravello/" target="_blank">
            <p class="text-center text-150">Instagram</p>
          </a>
        </div>


        <div class="col-md-4">
          <p class="text-center text-150">
            <font-awesome-icon :icon="['fab', 'youtube']"/>
          </p>
          <a href="" target="_blank">
            <p class="text-center text-150">Youtube</p>
          </a>
        </div>
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

  a {

    color: var(--secondary-color);

    &:hover {
      text-decoration: none;
    }
  }
</style>
