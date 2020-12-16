<template>
  <div>
    <div class="container-fluid pl-0 pr-0 mt-10">
      <div class="row no-gutters flex-md-row-reverse align-items-center" data-aos="fade-left">
        <div class="col-md-6 image-box"
             :style="{'background-image': 'url(' + require(`~/assets/images/box-home-suite.jpg`) + ')'}">
        </div>
        <div class="col-md-6 text-box  p-5" data-aos="fade-right"><h2>Camere & Suites</h2>
          <p>Villa Maria, nascendo come dimora signorile, prevedeva una differenziazione nella conformazione delle
            camere
            che, i signorotti di allora, per distinzione di classe dividevano in camere Padronali, camere degli ospiti,
            dei familiari e dei famigli. </p>
          <p><nuxt-link class="btn btn-darkred" :to="localePath('rooms')" tag="a">Scopri di Più</nuxt-link></p>
        </div>
      </div>
    </div>


    <div class="container-fluid pl-0 pr-0">
      <div class="row no-gutters align-items-center" data-aos="fade-right">
        <div class="col-md-6 image-box"
             :style="{'background-image': 'url(' + require(`~/assets/images/box-home-restaurant.jpg`) + ')'}">
        </div>
        <div class="col-md-6 text-box p-5" data-aos="fade-left"><h2>Il Ristorante</h2>
          <p>La cucina utilizza esclusivamente i prodotti del suo orto organico. Villa Maria è circondata da stupendi
            giardini terrazzati dove ogni mattina i contadini raccolgono i prodotti biologici (concimati con humus di
            capre e pecore allevate nelle vicine montagne) che possono essere gustati al ristorante.</p>

          <p><nuxt-link class="btn btn-darkred" :to="localePath('restaurant')" tag="a">Scopri di Più</nuxt-link></p>
        </div>
      </div>
    </div>

    <div class="container-fluid pl-0 pr-0">
      <div class="row no-gutters flex-md-row-reverse align-items-center" data-aos="fade-left">
        <div class="col-md-6 image-box"
             :style="{'background-image': 'url(' + require(`~/assets/images/box-home-winery.jpg`) + ')'}">
        </div>
        <div class="col-md-6 text-box p-5" data-aos="fade-right"><h2>La Cantina</h2>
          <p>Villa Eva fa parte dello stesso complesso turistico con gli hotel Villa Maria e Giordano e trae vantaggio
            dei servizi parcheggio, piscina e camere dei due alberghi. </p>
          <p><a class="btn btn-darkred" href="http://www.lacantinadifranceschino.it" target="_blank">Scopri di Più</a></p>
        </div>
      </div>
    </div>

    <div class="container-fluid pl-0 pr-0">
      <div class="row no-gutters align-items-center" data-aos="fade-right">
        <div class="col-md-6 image-box"
             :style="{'background-image': 'url(' + require(`~/assets/images/box-home-wedding.jpg`) + ')'}">
        </div>
        <div class="col-md-6 text-box p-5" data-aos="fade-left"><h2>Matrimoni</h2>
          <p>Villa Eva fa parte dello stesso complesso turistico con gli hotel Villa Maria e Giordano e trae vantaggio
            dei servizi parcheggio, piscina e camere dei due alberghi. </p>
          <p><a class="btn btn-darkred" href="http://www.villa-eva.it" target="_blank">Scopri di Più</a></p>
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
