<template>
  <div>
    <slider :slides="slides"></slider>
    <booking></booking>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">ristorante</h1>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <h4 class="text-center text-uppercase">l'orto biologico</h4>
          <div class="image-restaurant" :style="{'background-image': 'url('+require(`~/assets/images/box-restaurant-01.jpg`)+')'}"></div>
          <p class="text-justify">Villa Maria è circondata da stupendi giardini terrazzati dove ogni mattina i contadini
            raccolgono i
            prodotti biologici (concimati con humus di capre e pecore allevate nelle vicine montagne) che possono essere
            gustati al ristorante. La cucina utilizza esclusivamente i prodotti del suo orto biologico.</p>
        </div>

        <div class="col-md-6">
          <h4 class="text-center text-uppercase">passeggiata</h4>
          <div class="image-restaurant" :style="{'background-image': 'url('+require(`~/assets/images/box-restaurant-02.jpg`)+')'}"></div>
          <p class="text-justify">Gli ospiti possono passeggiare nei giardini e visitare la grotta con cappella rupestre
            che si può ammirare nell'ultima propaggine del giardino dove, in tempi passati, i contadini si fermavano a
            pregare nelle pause dal lavoro.</p>
        </div>
      </div>


      <div class="row mt-5">
        <div class="col-md-6">
          <h4 class="text-center text-uppercase">nonna orsola</h4>
          <div class="image-restaurant" :style="{'background-image': 'url('+require(`~/assets/images/box-restaurant-03.jpg`)+')'}"></div>
          <p class="text-justify">Il ristorante di Villa Maria nasce, come l'albergo, nel 1934 con nonna Orsola ai
            fornelli.</p>
        </div>
        <div class="col-md-6">
          <h4 class="text-center text-uppercase">piatti locali e rivisitati</h4>
          <div class="image-restaurant" :style="{'background-image': 'url('+require(`~/assets/images/box-restaurant-04.jpg`)+')'}"></div>
          <p class="text-justify">Oggi è possibile assaporare piatti della cucina regionale e locale rivisitati con
            sapienza e gusto moderno da famosi chef della costiera.</p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <h3 class="text-center">Il ristorante, consigliato dalle maggiori guide culinarie, <br> è stato premiato dal
            <strong>Gambero
              Rosso</strong> e dall'<strong>Accademia della Cucina.</strong></h3>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">

          <p class="text-justify">La rete televisiva inglese <strong>BBC</strong> ha filmato gli chef di Villa Maria
            all'opera mandandoli in onda nella trasmissione "<strong>This Morning</strong>" condotta da Lloyd Grossman e
            in seguito dal Gastronomo Antonio Carluccio.</p>
        </div>
        <div class="col-md-6">

          <p class="text-justify"> Rinomate le Scuole di Cucina che vi si tengono e che, condotte da un noto storico
            della cucina, prevedono un percorso che va dalla raccolta dei prodotti dell'orto all'assaggio di quanto
            preparato da parte degli stessi partecipanti ai corsi.</p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12"><p class="text-center">
          Dello scrittore americano <strong>Gore Vidal</strong>, del sociologo <strong>Domenico De Masi</strong>, del
          grande chirurgo <strong>Antonio Guarnieri</strong>, di <strong>Susan Sarandon</strong>, <strong>Matt
          Dillon</strong>, <strong>Hugh Grant</strong>, si possono ammirare le foto che li ritraggono a convivio a
          <strong>Villa Maria</strong>. <strong>Giulio Andreotti</strong>, <strong>Maria Gabriella di Savoia</strong>,
          <strong>Gianni Brera</strong>, <strong>Luciano De Crescenzo</strong>, <strong>Irene Papas</strong>, <strong>Vittorio
          Sgarbi</strong>, <strong>Lina Wertmuller</strong> sono fra quelli che hanno firmato il loro passaggio al
          <strong>Ristorante della Famiglia Palumbo</strong>.
        </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center text-uppercase">gallery</h1>
        </div>
      </div>

      <gallery gallery="restaurant"></gallery>


    </div>

  </div>
</template>

<script>


    import Gallery from "../components/Gallery";

    export default {
        name: "restaurant",
        components: {
            'gallery': Gallery
        },

        data() {
            return {
                items: [],
                slides: [
                    require(`~/assets/images/slider-restaurant-01.jpg`),
                ],
                lgOptions: {
                    mode: 'lg-fade',
                    thumbnail: true,
                    animateThumb: false,
                    showThumbByDefault: false,
                    selector: '.col-md-4'
                },
                gallery: [
                    require(`~/assets/images/gallery/restaurant-01.jpg`),
                    require(`~/assets/images/gallery/restaurant-02.jpg`),
                    require(`~/assets/images/gallery/restaurant-03.jpg`),
                    require(`~/assets/images/gallery/restaurant-04.jpg`),
                    require(`~/assets/images/gallery/restaurant-05.jpg`)
                ]
            }
        },
        mounted() {
            this.createGallery();
        },
        methods: {
            async createGallery() {
                var cache = {};
                const images = require.context('../static/images/gallery/restaurant/', false, /\.jpg$/);
                var imagesArray = Array.from(images.keys());
                var constructed = [];
                this.items = this.constructItems(imagesArray, constructed);
                const el = document.getElementById('lightgallery', this.lgOptions);
                setTimeout(() => {
                    window.lightGallery(el)
                }, 100);
            },

            constructItems(fileNames, constructed) {
                fileNames.forEach(fileName => {
                    constructed.push({
                        'src': '/images/gallery/restaurant' + fileName.substr(1)
                    })
                });
                return constructed;
            }
        }
    }
</script>

<style scoped lang="scss">
  .lg-thumbnails {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
  };
  .image-restaurant {
    height: 200px;
    background-size: cover;
    margin: 20px 0;
    background-position: center;
  }
</style>
