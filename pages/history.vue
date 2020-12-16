<template>
  <div>

    <slider :slides="slides"></slider>
    <booking></booking>

    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-12">
          <h1 class="text-center">STORIA</h1>
          <div class="two-columns">
          <p class="text-justify">Ricca ed interessante è la storia di questa villa che fu la dimora dei
            nobili romani Marchesi De Cinque, storia che si mescola con quella di Ravello e della costiera amalfitana.
            La struttura, che conserva l'elegante forma del palazzotto signorile, nel corso degli anni ha subito delle
            significative ristrutturazioni che l'hanno portata all'attuale splendore. In tutti gli ambienti, saloni,
            scale e soggiorni è possibile ammirare gli antichi pavimenti in marmo, mentre nelle camere e nei bagni
            fanno mostra di sé le maioliche dipinte a mano dai maestri della Scuola Vietrese.</p>

            <p class="text-justify">Gli arredi di Villa Maria sono estremamente curati e consoni allo stile della villa; stile liberty e art
            déco sono presenti accanto a bellissimi lampadari in vetro di Murano, ogni angolo accoglie il visitatore
            facendo rivivere la magia del passato.</p>

            <p class="text-justify">Gli ambienti sono comunque dotati di moderne tecnologie, le camere sono state rinnovate all'insegna del
            confort, nei bagni è possibile rilassarsi nella doccia o nella vasca con idromassaggio; l'intera Villa è
            dotata di aria condizionata.</p>

            <p class="text-justify">Sono molti gli ospiti illustri che hanno soggiornato a Villa Maria. Di alcuni si conserva la testimonianza
            del loro passaggio, Giovanni di Borbone delle Due Sicilie ha lasciato una dedica molto significativa del
            suo soggiorno, di Benito Mussolini, si conserva una lettera in cui ringrazia per l'ospitalità ricevuta, lo
            scultore Mastroianni incantato dalla bellezza di Villa Maria, lascia come omaggio una sua opera.</p>

            <p class="text-justify">Alberto Granado, compagno di avventure e braccio destro di Che Guevara scrive: "Admirado por la beleza del
            lugar y la calida hospitalidad de sus habitantes les dedico estas linea".</p>

            <p class="text-justify">La famiglia Palumbo, proprietaria da quattro generazioni, iniziate con i bisnonni Vincenzo e Orsola nel
            1934, continua l'attività con i pronipoti Francesco e Giuseppe che, grazie alla loro esperienza maturata
            in alberghi e ristoranti all'estero, si dedicano alla conduzione di Villa Maria con giovanile entusiasmo
            ma con lo stessa attenzione ed amore degli avi.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

    export default {

        data() {
            return {
                slides: [
                    require(`~/assets/images/slider-history-01.jpg`),
                    require(`~/assets/images/slider-history-02.jpg`)
                ]
            }
        }
    }
</script>

<style scoped>

</style>
