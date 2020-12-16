<template>
  <div>
    <slider :slides="slides"></slider>
    <booking></booking>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">servizi</h1>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <card :item="services.parking"></card>
        </div>
        <div class="col-md-4">
          <card :item="services.porter"></card>
        </div>
        <div class="col-md-4">
          <card :item="services.pool"></card>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <card :item="services.pizzeria"></card>
        </div>
        <div class="col-md-4">
          <card :item="services.beautycenter"></card>
        </div>
        <div class="col-md-4">
          <card :item="services.cookingclass"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "services",
        data() {
            return {
                slides: [
                    require(`~/assets/images/slider-services-01.jpg`),
                    require(`~/assets/images/slider-services-02.jpg`)
                ],
                services: {
                    parking: {
                        title: 'Parcheggio',
                        image: require(`~/assets/images/service-parking.jpg`),
                        url: '#',
                        desc: `L'hotel Giordano il cui parcheggio privato, uno dei pochi a Ravello, vicinissimo alla
                        piazza principale è gratuito per gli ospiti e dispone di servizio di trasporto bagagli in camera.`,
                    },
                    porter: {
                        title: 'Porter',
                        image: require(`~/assets/images/service-porter.jpg`),
                        url: '#',
                        desc: `L'hotel offre il servizio porter gratuito, disponibile dalle ore 07:00 alle ore 24:00
                        (da metà maggio a metà Ottobre). Su richiesta per i restanti periodi indicando l'orario di arrivo
                        all'atto della prenotazione.`,
                    },
                    pool: {
                        title: 'Piscina',
                        image: require(`~/assets/images/service-pool.jpg`),
                        url: '#',
                        desc: `Splendida costruzione a sfioro di 20 x 10 metri e rivestita con maioliche e fondo antisdrucciolo
                        E' circondata da un vastissimo solarium con zone ombreggiate da splendidi alberi di magnolia`,
                    },
                    pizzeria: {
                        title: 'Pizzeria & Snack',
                        image: require(`~/assets/images/service-pizzeria.jpg`),
                        url: '#',
                        desc: `Servizio Snack aperto dalle ore 12 alle 17 disponibile da metà Maggio a Settembre nell'area dedicata a bordo piscina.`,
                    },

                    beautycenter: {
                        title: 'Beauty Center',
                        image: require(`~/assets/images/service-beautycenter.jpg`),
                        url: '#',
                        desc: `Nel nostro centro benessere, gli ospiti hanno a disposizione tutto ciò che occorre per una completa rigenerazione.`,
                    },

                    cookingclass: {
                        title: 'Cooking Class',
                        image: require(`~/assets/images/service-cookingclass.jpg`),
                        url: '#',
                        desc: `La scuola di cucina "Villa Maria", fondata nel 1974, vanta un'esperienza più che trentennale.`,
                    },
                }
            }
        }
    }
</script>

<style scoped>

</style>
