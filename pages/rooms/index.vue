<template>
  <div>
    <!--    <slider :slides="slides"></slider>
        <booking></booking> -->

    <div class="container">
      <div class="row mt-5">
        <div class="col-12" data-aos="zoom-in" data-aos-duration="1000">
          <h1 class="text-center">CAMERE</h1>


          <div class="two-columns">
            <p class="text-justify">Villa Maria, nascendo come dimora signorile, prevedeva una differenziazione nella
              conformazione delle camere che, i signorotti di allora, per distinzione di classe dividevano in camere
              Padronali, camere degli ospiti, dei familiari e dei famigli. Oggi, esse, sono distinte in varie categorie
              dalla Basic alla Suite. Tutte sfoggiano un arredamento elegante; sono deliziose con le loro maioliche
              dipinte a mano dai Maestri della ceramica Vietrese. Le camere sono dotate di tutti i moderni comfort e di
              bagno con doccia o vasca, e tutte servite da televisione e, a seconda della loro conformazione e/o
              categoria, alcune possono avere due televisori, uno visibile dal letto, l'altro posizionato nella zona
              soggiorno.</p>

            <p class="text-justify">Gran parte delle camere hanno balconcino, o terrazzino i finestra con vista mare
              frontale, laterale o vista giardino; alcune con ampia finestra e vista mare. Da Villa Maria si gode una
              vista unica al mondo, il mare, la natura, le limonaie. Tutti gli ospiti possono accedere alla zona
              solarium e alla zona relax dove poter riposare all'ombra di piante ornamentali.</p>
          </div>


        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col-sm-12 col-md-4 col-lg-3 mt-3" v-for="room in rooms"
             data-aos="zoom-in" data-aos-duration="1000">

          <div class="card">
            <div class="card-header">
              <nuxt-link :to="localePath('rooms')+'/'+room.id " :key="room.id">
                <img :src="require(`~/static/images/gallery/${room.id}/${room.id}-01.jpg`)" :alt="room.name"
                     v-if="room">
              </nuxt-link>
            </div>
            <div class="card-body text-center" v-if="room.name">
              <div class="row">
                <div class="col-12">
                  <nuxt-link :to="localePath('rooms')+'/'+room.id " :key="room.id"><h2>{{room.name.it}}</h2></nuxt-link>
                  <p class="text-center font-weight-lighter">{{room.description.it}}</p>
                </div>
                <!--<div class="col-12 services">
                  <span v-for="service in room.services"><i :class="service.icon" v-b-tooltip.hover
                                                            :title="service.name.it"></i></span>
                </div> -->
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import rooms from '~/static/data/rooms.json'

  export default {
    name: "rooms",
    data() {
      return {
        slides: [
          require(`~/assets/images/slider-rooms-01.jpg`),
          require(`~/assets/images/slider-rooms-02.jpg`)
        ],
        rooms: []
      }
    },
    mounted() {
      this.rooms = rooms.rooms
      console.log(this.rooms);
    },


  }
</script>

<style scoped lang="scss">
  .card {
    img {
      max-width: 100%;
    }
    a {
      color: var(--primary-color);
      &:hover {
        text-decoration: none;
      }
    }
  }

  .services {
    span {
      margin: 10px;

      i {
        font-size: 25px;
        color: var(--primary-color)
      }
    }
  }
</style>
