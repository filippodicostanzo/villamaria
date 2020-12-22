<template>
  <div>
    <slider :slides="slides"></slider>
    <booking></booking>
    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">breakfast</h1>
          <div class="two-columns">
            <p class="text-justify">Una colazione variegata e salutare per iniziare al meglio la giornata. Il giusto
              apporto di gusto e energie per vivere a pieno la magia della Costiera Amalfitana. </p>

            <p class="text-justify">Un ricco buffet che comprende un’ampia selezione di prodotti di pasticceria anche
              locale, salumi e formaggi, frutta fresca di stagione e verdure biologiche dell’orto di Villa Maria, succhi
              di frutta e centrifugati, confetture e cereali.</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "breakfast",
    data() {
      return {
        slides: [
          require(`~/assets/images/slider-breakfast-01.jpg`),
          require(`~/assets/images/slider-breakfast-02.jpg`),
          require(`~/assets/images/slider-breakfast-03.jpg`)
        ]
      }
    }
  }
</script>

<style scoped>

</style>
