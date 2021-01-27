<template>
  <div>
    <booking-small></booking-small>
    <slider :slides="slides"></slider>



    <div class="container" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row mt-5">
        <div class="col-md-4 text-md-center text-lg-left text-sm-center mt-sm-3">
          <button class="btn btn-outline-primary text-capitalize">{{$t('rooms.backtotherooms')}}</button>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4 text-md-center text-lg-right text-sm-center mt-sm-3 mb-sm-5">
          <b-dropdown id="dropdown-1" :text="$t('rooms.choosethetype')" variant="outline-primary">
            <!-- <nuxt-link v-for="room in rooms" ><b-dropdown-item href="camere">{{room.name.it}}</b-dropdown-item></nuxt-link> -->
            <nuxt-link v-for="room in rooms" tag="b-dropdown-item" :to="room.id" active :key="room.id">
              <span v-if="$i18n.locale==='it'"> {{room.name.it}}</span>
              <span v-if="$i18n.locale==='en'"> {{room.name.en}}</span>
            </nuxt-link>
            <!-- <b-dropdown-item  v-for="room in rooms"  :href="room.id">{{room.name.it}}</b-dropdown-item> -->

          </b-dropdown>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1 class="text-center text-uppercase" v-if="$i18n.locale==='it'">{{room.name.it}}</h1>
          <h1 class="text-center text-uppercase" v-if="$i18n.locale==='en'">{{room.name.en}}</h1>
          <h3 class="text-center">{{$t('rooms.mediumsize')}}: {{room.size}} mq</h3>
          <p class="text-center" v-if="$i18n.locale==='it'">{{room.description.it}}</p>
          <p class="text-center" v-if="$i18n.locale==='en'">{{room.description.en}}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mt-5">
          <h3 class="text-center text-uppercase">{{$t('title.services')}}</h3>
          <p class="text-center"><span v-for="(service, index) in room.services">
            <span v-if="$i18n.locale==='it'">{{service.name.it}}</span>
            <span v-if="$i18n.locale==='en'">{{service.name.en}}</span>
            <span v-if="index+1<room.services.length"> - </span></span></p>
        </div>
      </div>

     <!-- <div class="row mt-5">
        <div class="col-12">
          <h3 class="text-center text-uppercase">Gallery</h3>
          <gallery :gallery="room.id"></gallery>
        </div>
      </div>-->
      <div class="row rooms-nav mt-5">
        <div class="col-12">
          <h2 class="text-center text-uppercase">{{$t('title.otherrooms')}}</h2>
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
                  <p v-if="$i18n.locale==='it'">{{prev.name.it}}</p>
                  <p v-if="$i18n.locale==='en'">{{prev.name.en}}</p>
                  <p class="small text-capitalize">
                    <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"/>
                    {{$t('rooms.previous')}}
                  </p>
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
                  <p v-if="$i18n.locale==='it'">{{next.name.it}}</p>
                  <p v-if="$i18n.locale==='en'">{{next.name.en}}</p>
                  <p class="small text-capitalize">{{$t('rooms.next')}}
                    <font-awesome-icon :icon="['far', 'arrow-alt-circle-right']"/>
                  </p>
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


      this.slides.push(
        require(`~/static/images/gallery/${id}/${id}-01.jpg`),
        require(`~/static/images/gallery/${id}/${id}-02.jpg`),
        require(`~/static/images/gallery/${id}/${id}-03.jpg`)
      );

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
