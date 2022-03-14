<template>
  <div>
    <booking-small></booking-small>
    <slider :slides="slides"></slider>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{$t('title.services')}}</h1>
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
          <card :item="services.jacuzzi"></card>
        </div>
        <div class="col-md-4">
          <card :item="services.cookingclass"></card>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 offset-md-4">
          <card :item="services.solarium"></card>
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
            title: {
              it: 'Parcheggio',
              en: 'Parking'
            },
            image: require(`~/assets/images/service-parking.jpg`),
            url: '#',
            desc: {
              it: `L'hotel Giordano il cui parcheggio privato, uno dei pochi a Ravello, vicinissimo alla
                        piazza principale è gratuito per gli ospiti e dispone di servizio di trasporto bagagli in camera.`,
              en: `It is at the Hotel Giordano, few meters away from Ravello's main square, one of the very few hotels in Ravello with private parking.`
            }
          },
          porter: {
            title: {
              it: 'Porter',
              en: 'Porter'
            },
            image: require(`~/assets/images/service-porter.jpg`),
            url: '#',
            desc: {
              it: `L'hotel offre il servizio porter gratuito, disponibile dalle ore 07:00 alle ore 24:00
                        (da metà maggio a metà Ottobre). Su richiesta per i restanti periodi indicando l'orario di arrivo
                        all'atto della prenotazione.`,
              en: `Free Porter Service is available from 07:00 until midnight (from Mid-May to Mid-October).
                                On request for the remaining period by indicating the arrival time when confirming the reservation.`
            }
          },
          pool: {
            title: {
              it: 'Piscina',
              en: 'Pool'
            },
            image: require(`~/assets/images/service-pool.jpg`),
            url: '#',
            desc: {
              it: `Situata presso l’Hotel Giordano, della stessa proprietà e raggiungibile con una passeggiata di circa 5 minuti. Splendida costruzione a sfioro di 20 x 10 metri e rivestita con maioliche e fondo antisdrucciolo.
                        E' circondata da un vastissimo solarium con zone ombreggiate da splendidi alberi di magnolia`,
              en: `Situated at 5 minutes walking distance of the Hotel Giordano, of the same property. It is a 20x10 meters beautiful swimming pool is covered with majolica and nonslip bottom is equipped with whirlpool device`
            }
          },
          pizzeria: {
            title: {
              it: 'Servizio Snack Bar',
              en: 'Snack Bar Service'
            },
            image: require(`~/assets/images/service-pizzeria.jpg`),
            url: '#',
            desc: {
              it: `Servizio Snack aperto dalle ore 12 alle 17 disponibile da metà Maggio a Settembre nell'area dedicata a bordo piscina (presso l'hotel Giordano, della stessa proprietà)`,
              en: `Snack service open from 12 to 17 available from mid May to September by the Swimming pool Area (at the sister Hotel Giordano).`
            }
          },
          cookingclass: {
            title: {
              it: 'Cooking Class',
              en: 'Cooking Class'
            },
            image: require(`~/assets/images/service-cookingclass.jpg`),
            url: '#',
            desc: {
              it: `La scuola di cucina "Villa Maria", fondata nel 1974, vanta un'esperienza più che trentennale.`,
              en: `The "Villa Maria" cooking school, founded in 1974, boasts more than thirty years of experience.`
            }
          },

          jacuzzi: {
            title: {
              it: 'Mini Piscina Jacuzzi 5 Posti',
              en: 'Mini Pool Jacuzzi 5 Seats'
            },
            image: require(`~/assets/images/service-jacuzzi.jpg`),
            url: '#',
            desc: {
              it: `Il piacere di rilassarsi nella nostra Jacuzzi esterna, ammirando in tutta tranquillità uno dei paesaggi più suggestivi al mondo! Coccolati da getti d’acqua a diversa pressione, la vasca idromassaggio garantirà ai nostri ospiti momenti di relax e benessere.`,
              en: `The pleasure of relaxing in our outdoor Jacuzzi, enjoying one of the most evocative landscapes in the world in complete tranquility! Pampered by jets of water at different pressures, the hot tub will guarantee our guests moments of relaxation and well-being.`
            }
          },

          solarium: {
            title: {
              it: 'Solarium',
              en: 'Solarium'
            },
            image: require(`~/assets/images/service-solarium.jpg`),
            url: '#',
            desc: {
              it: `Un ampio solarium attrezzato con lettini prendisole, tavoli con sedie e docce, è il luogo ideale per godersi la tranquillità di questo angolo elegante e intimo di Ravello, lontani dai rumori cittadini e immersi nella bellezza del panorama unico della Costiera Amalfitana..`,
              en: `A large solarium equipped with sun loungers, table with chairs and shower. The ideal place to enjoy the tranquility of this elegant and intimate corner of Ravello, away from the city noises and immersed in the beauty of the unique panorama of the Amalfi Coast.`
            }
          },
        }
      }
    }
  }
</script>

<style scoped>
</style>
