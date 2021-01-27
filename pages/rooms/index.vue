<template>
  <div>
    <booking-small></booking-small>
    <!--    <slider :slides="slides"></slider>
        <booking></booking> -->

    <div class="container">
      <div class="row mt-5">
        <div class="col-12" data-aos="zoom-in" data-aos-duration="1000">
          <h1 class="text-center text-uppercase">{{$t('title.rooms')}}</h1>


          <div v-html="$t('rooms.block')"></div>


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
                  <nuxt-link :to="localePath('rooms')+'/'+room.id " :key="room.id">

                    <!-- {{$t('data.rooms.'+room.id+'.name')}} -->

                    <h2 v-if="$i18n.locale==='en'">
                      {{room.name.en}}
                    </h2>
                    <h2 v-if="$i18n.locale==='it'">
                      {{room.name.it}}
                    </h2>



                  </nuxt-link>
                  <p class="text-center font-weight-lighter" v-if="$i18n.locale==='en'">
                    {{room.description.en}}
                  </p>

                  <p class="text-center font-weight-lighter" v-if="$i18n.locale==='it'">
                    {{room.description.it}}
                  </p>

                  <p class="small font-weight-lighter">{{$t('rooms.note')}}</p>

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
