<template>
  <div class="container mt-10">
    <div class="row">
      <div class="col-md-4">
        <card :item="hotelgiordano"></card>
      </div>
      <div class="col-md-4">
        <card :item="cookingclass"></card>
      </div>
      <div class="col-md-4">
        <card :item="villaeva"></card>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-4">
        <card :item="wagnertours"></card>
      </div>
      <div class="col-md-4">
        <card :item="boituque"></card>
      </div>
      <div class="col-md-4">
        <card :item="winery"></card>
      </div>
    </div>
  </div>
</template>

<script>
    import Card from "./Card";

    export default {
        name: "Showcase",
        data() {
            return {
                cookingclass: {
                    image: require(`~/assets/images/cover-cooking-class.jpg`),
                    url: 'http://www.lacantinadifranceschino.it/',
                    title: {
                        it: 'Cooking Class',
                        en: 'Cooking Class'
                    },
                    desc: {
                        it: 'Corsi di cucina giornalieri, individuali o di gruppo, per scoprire i segreti delle ricette tradizionali della cucina della Costiera Amalfitana. Le lezioni saranno accompagnate da aneddoti e spiegazioni accurate e termineranno, naturalmente, con la degustazione dei piatti preparati',
                        en: `Daily cooking classes, individual or group, to discover the secrets of the traditional recipes of the Amalfi Coast cuisine. The lessons will be accompanied by anecdotes and accurate explanations and will end, of course, with the tasting of the dishes prepared`
                    },
                },
                villaeva: {
                    image: require(`~/assets/images/cover-villa-eva.jpg`),
                    url: 'http://www.villaeva.it/',
                    title: {
                        it: 'Villa Eva',
                        en: 'Villa Eva'
                    },
                    desc: {
                        it: 'L’atmosfera magica di una villa in stile liberty immersa, con le sue forme armoniche ed eleganti, in un ampio parco da cui si gode una vista superba della Costiera Amalfitana: un colpo d’occhio eccezionale, location ideale per cerimonie e matrimoni da sogno!',
                        en: `Splendid villa in late liberty style, with a protracted harmonic outline has been redecorated with care and respect of the original style, it has been always an ideal location for ceremonies, banquets and exclusive meetings.`
                    },
                },
                wagnertours: {
                    image: require(`~/assets/images/cover-wagner-tours.jpg`),
                    url: 'http://www.weddinginravello.it/',
                    title: {
                        it: 'Wagner Tours',
                        en: 'Wagner Tours'
                    },
                    desc: {
                        it: 'La passione è l’ingrediente chiave nell’organizzazione di un matrimonio, un evento che dovrà essere ricordato per tutta la vita. Ogni singolo aspetto, ogni minimo dettaglio sarà curato in maniera maniacale per rendere il giorno del “sì” un momento magico!',
                        en: `Getting married in Ravello - Amalfi Coast - Italy Wagner Tours wedding and weddings specialises in exclusive and spectacular weddings in Ravello on the Amalfi Coast of Italy offering a complete and personalised wedding planning service.`
                    },
                },
                boituque: {
                    image: require(`~/assets/images/cover-villa-maria-boutique.jpg`),
                    url: 'http://www.weddinginravello.it/',
                    title: {
                        it: 'La Bottega Di Villa Maria',
                        en: 'Villa Maria Boutique'
                    },
                    desc: {
                        it: 'Non solo accessori moda e ceramiche vietresi ma anche un bar bottega per uno spuntino veloce: la Bottega di Villa Maria è il luogo dove l’amore per il bello e il buono riescono a convivere in maniera simbiotica.',
                        en: `Not only fashion accessories and Vietri ceramics but also a shop bar for a quick snack: the Bottega di Villa Maria is the place where love for beauty and good can coexist in a symbiotic way.`
                    },
                },

                beautycenter: {
                    image: require(`~/assets/images/cover-beauty-center-carla.jpg`),
                    url: 'http://www.weddinginravello.it/',
                    title: {
                        it: 'Beauty Center Carlà',
                        en: 'Beauty Center Carlà'
                    },
                    desc: {
                        it: 'Mantenersi giovani e stare meglio con se stessi grazie alle cure e alle attenzioni di mani esperte e professionali: il Beauty Center Carlà offre un’ampia scelta di massaggi e trattamenti estetici per rigenerare il benessere fisico e psicologico e ritrovare il perfetto equilibrio tra mente e corpo.',
                        en: `Keeping young and feeling better about yourself thanks to the care and attention of expert and professional hands: the Beauty Center Carlà offers a wide range of massages and beauty treatments to regenerate physical and psychological well-being and rediscover the perfect balance between mind and body`
                    },
                },

                hotelgiordano: {
                    image: require(`~/assets/images/cover-hotel-giordano.jpg`),
                    url: 'http://www.weddinginravello.it/',
                    title: {
                        it: 'Hotel Giordano',
                        en: 'Hotel Giordano'
                    },
                    desc: {
                        it: 'Elegante costruzione di fine ‘700, immersa nella quiete del centro storico di Ravello, L’Hotel Giordano dispone di ampi spazi comuni arredati con mobili d’epoca, raffinati dipinti e maioliche vietresi realizzate a mano. ',
                        en: `The construction, without sea view, which goes back to the '700, was composed by central nucleus that in times has undergone various enlargements and restructurings, the last recently ended, has completely renewed the hotel with the subsequent award of four stars.`
                    },
                },

                winery: {
                    image: require(`~/assets/images/cover-la-cantina-di-franceschino.jpg`),
                    url: 'http://www.lacantinadifranceschino.it/',
                    title: {
                        it: 'La Cantina di Franceschino',
                        en: 'La Cantina di Franceschino'
                    },
                    desc: {
                        it: 'Oltre 400 etichette tra i migliori vini italiani e francesi, potendo scegliere tra rossi, bianchi, rosati, spumanti e champagne, per vivere una preziosa esperienza sensoriale.',
                        en: `Over 400 labels of the best Italian and French wines, including sparkling wines and champagne, to live a precious sensory experience: a venue of great value, impeccable service and excellent dishes enjoying the enchanting panorama of the Amalfi coast.`
                    },
                },
            }
        },
        components: {'card': Card}
    }
</script>

<style scoped>

</style>
