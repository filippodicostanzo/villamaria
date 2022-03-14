<template>
  <div>
    <booking-small></booking-small>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{ $t('title.help') }}</h1>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          <ul>
            <li>
              <a href="pdf/bonusregione.pdf">Bonus Regione</a>
            </li>
            <li>
              <a href="pdf/credito.pdf">Credito D'Imposta</a>
            </li>
            <li>
              <a href="pdf/garanzia.pdf">Garanzia del Fondo</a>
            </li>
            <li>
              <a href="pdf/prestito.pdf">Prestito con Garanzia</a>
            </li>
            <li>
              <a href="pdf/bonusregione.pdf">Decreto Ristori</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "help",
  data() {
    return {
      slides: [
        require(`~/assets/images/slider-services-01.jpg`),
        require(`~/assets/images/slider-services-02.jpg`)
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    margin: 20px 0;
    a {
      color: white !important;
    }
  }
}
</style>
