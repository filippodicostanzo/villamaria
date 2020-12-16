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
        <card :item="beautycenter"></card>
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
                    title: 'Cooking Class',
                    desc: {
                        it: 'Corsi di cucina giornalieri, individuali o di gruppo, per scoprire i segreti delle ricette tradizionali della cucina della Costiera Amalfitana. Le lezioni saranno accompagnate da aneddoti e spiegazioni accurate e termineranno, naturalmente, con la degustazione dei piatti preparati',
                        en: ''
                    },
                },
                villaeva: {
                    image: require(`~/assets/images/cover-villa-eva.jpg`),
                    url: 'http://www.villaeva.it/',
                    title: 'Villa Eva',
                    desc: {
                        it: 'L’atmosfera magica di una villa in stile liberty immersa, con le sue forme armoniche ed eleganti, in un ampio parco da cui si gode una vista superba della Costiera Amalfitana: un colpo d’occhio eccezionale, location ideale per cerimonie e matrimoni da sogno!',
                        en: ''
                    },
                },
                wagnertours: {
                    image: require(`~/assets/images/cover-wagner-tours.jpg`),
                    url: 'http://www.weddinginravello.it/',
                    title: 'Wagner Tours',
                    desc: {
                        it: 'La passione è l’ingrediente chiave nell’organizzazione di un matrimonio, un evento che dovrà essere ricordato per tutta la vita. Ogni singolo aspetto, ogni minimo dettaglio sarà curato in maniera maniacale per rendere il giorno del “sì” un momento magico!',
                        en: ''
                    },
                },
                boituque: {
                    image: require(`~/assets/images/cover-villa-maria-boutique.jpg`),
                    url: 'http://www.weddinginravello.it/',
                    title: 'La Bottega di Villa Maria',
                    desc: {
                        it: 'Non solo accessori moda e ceramiche vietresi ma anche un bar bottega per uno spuntino veloce: la Bottega di Villa Maria è il luogo dove l’amore per il bello e il buono riescono a convivere in maniera simbiotica.',
                        en: ''
                    },
                },

                beautycenter: {
                    image: require(`~/assets/images/cover-beauty-center-carla.jpg`),
                    url: 'http://www.weddinginravello.it/',
                    title: 'Beauty Center Carlà',
                    desc: {
                        it: 'Mantenersi giovani e stare meglio con se stessi grazie alle cure e alle attenzioni di mani esperte e professionali: il Beauty Center Carlà offre un’ampia scelta di massaggi e trattamenti estetici per rigenerare il benessere fisico e psicologico e ritrovare il perfetto equilibrio tra mente e corpo.',
                        en: ''
                    },
                },

                hotelgiordano: {
                    image: require(`~/assets/images/cover-hotel-giordano.jpg`),
                    url: 'http://www.weddinginravello.it/',
                    title: 'Hotel Giordano',
                    desc: {
                        it: 'Elegante costruzione di fine ‘700, immersa nella quiete del centro storico di Ravello, L’Hotel Giordano dispone di ampi spazi comuni arredati con mobili d’epoca, raffinati dipinti e maioliche vietresi realizzate a mano. ',
                        en: ''
                    },
                },
            }
        },
        components: {'card': Card}
    }
</script>

<style scoped>

</style>
