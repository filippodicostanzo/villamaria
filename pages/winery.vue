<template>
  <div>
    <slider :slides="slides"></slider>
    <booking></booking>
    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">la cantina</h1>
          <div class="two-columns">
            <p class="text-justify">Oltre 400 etichette tra i migliori vini italiani e francesi, potendo scegliere tra
              rossi, bianchi, rosati, spumanti e champagne, per vivere una preziosa esperienza sensoriale: un ambiente
              di gran pregio, un servizio impeccabile e piatti eccellenti da gustare ammirando il panorama incantevole
              della Costa d’Amalfi. Ogni dettaglio contribuisce a rendere unico questo luogo che esprime il meglio di
              uno stile d'accoglienza tutto italiano.</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "winery",
    data() {
      return {
        slides: [
          require(`~/assets/images/slider-winery-01.jpg`),
          require(`~/assets/images/slider-winery-02.jpg`),
          require(`~/assets/images/slider-winery-03.jpg`)
        ]
      }
    }
  }
</script>

<style scoped>

</style>
