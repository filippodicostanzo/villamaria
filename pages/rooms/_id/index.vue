<template>
  <div>
    <slider :slides="slides"></slider>

    <booking></booking>

    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-md-4 text-md-center text-lg-left text-sm-center mt-sm-3">
          <button class="btn btn-outline-primary">Torna alle Camere</button>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4 text-md-center text-lg-left text-sm-center mt-sm-3 mb-sm-5">
          <b-dropdown id="dropdown-1" text="Scegli Tipologia" variant="outline-primary">
            <!-- <nuxt-link v-for="room in rooms" ><b-dropdown-item href="camere">{{room.name.it}}</b-dropdown-item></nuxt-link> -->
            <nuxt-link v-for="room in rooms" tag="b-dropdown-item" :to="room.id" active :key="room.id">
              {{room.name.it}}
            </nuxt-link>
            <!-- <b-dropdown-item  v-for="room in rooms"  :href="room.id">{{room.name.it}}</b-dropdown-item> -->

          </b-dropdown>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1 class="text-center text-uppercase">{{room.name.it}}</h1>
          <h3 class="text-center">Dimensioni medie: {{room.size}} mq</h3>
          <p class="text-center">{{room.description.it}}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mt-5">
          <h3 class="text-center text-uppercase">Servizi</h3>
          <p class="text-center"><span v-for="(service, index) in room.services">{{service.name.it}}<span
            v-if="index+1<room.services.length"> - </span></span></p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <h3 class="text-center text-uppercase">Gallery</h3>
          <gallery :gallery="room.id"></gallery>
        </div>
      </div>
      <div class="row rooms-nav mt-5">
        <div class="col-12">
          <h2 class="text-center">Altre Camere</h2>
        </div>
        <div class="col-md-4">
          <div v-if="prev">
            <nuxt-link :to="prev.id" tag="a" v-if="prev.id">
              <div class="row">
                <div class="col-12 text-center">
                  <img :src="require(`~/static/images/gallery/${prev.id}/${prev.id}-01.jpg`)" v-if="prev.id"
                       :alt="prev.id">
                </div>
                <div class="col-12 text-center mt-2">
                  <p>{{prev.name.it}}</p>
                  <p class="small"><font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"/> Precedente </p>
                </div>

              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-4 text-center">{{index+1}}/{{rooms.length}}</div>
        <div class="col-md-4">
          <div v-if="next">
            <nuxt-link :to="next.id" tag="a" v-if="next.id">
              <div class="row">
                <div class="col-12 text-center">
                  <img :src="require(`~/static/images/gallery/${next.id}/${next.id}-01.jpg`)" v-if="next.id"
                       :alt="next.id">
                </div>
                <div class="col-12 text-center mt-2">
                  <p>{{next.name.it}}</p>
                  <p class="small">Successiva <font-awesome-icon :icon="['far', 'arrow-alt-circle-right']"/></p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
    import rooms from '~/static/data/rooms.json'
    import Gallery from "../../../components/Gallery";

    export default {
        name: "id",
        props: ['id'],
        components: {'gallery': Gallery},
        data() {
            return {
                room: {
                    name: {},
                    description: {},
                    resume: {}
                },

                slides: [],
                rooms: [],
                prev: {
                    name: {},
                    description: {},
                    resume: {}
                },
                next: {
                    name: {},
                    description: {},
                    resume: {}
                },
                index: 0

            }
        },
        mounted() {
            const id = this.$route.params.id;
            this.rooms = rooms.rooms;
            this.room = this.rooms.find(x => x.id === id);
            this.slides.push(require(`~/static/images/gallery/${id}/${id}-01.jpg`));

            this.index = this.rooms.indexOf(this.room);
            console.log(this.index);
            this.prev = this.rooms[this.index - 1];
            console.log(this.prev);
            this.next = this.rooms[this.index + 1];
            console.log(this.next);
        },
    }
</script>

<style lang="scss">

  #dropdown-1 {
    .nuxt-link-active {
      a {
        background-color: var(--primary-color);
      }
    }

    .dropdown-item.active, .dropdown-item:active {
      color: #fff;
      text-decoration: none;
      background-color: var(--primary-color);
    }
  }

  .rooms-nav {
    img {
      width: 70%;
      max-width: 100%;
    }

    a {
      &:hover {
        text-decoration: none;
      }
    }

    p {
      color: var(--primary-color)
    }
  }


</style>
