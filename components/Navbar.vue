<template>

  <div data-aos="zoom-in" id="nav" >
    <b-nav v-if="!mobile">
      <b-nav-item v-b-toggle.collapse-1 v-scroll-to="'#top'">
        <font-awesome-icon :icon="['fas', 'globe']"/>
      </b-nav-item>
      <b-nav-item v-for="item in menu" :key="item.slug">
        <nuxt-link :to="localePath(item.slug)">{{$t('menu.'+item.name)}}</nuxt-link>
      </b-nav-item>


      <b-nav-item v-if="this.$colorMode.preference === 'dark'" v-on:click="changeStyle('light')">
        <font-awesome-icon :icon="['far', 'sun']"/>
      </b-nav-item>
      <b-nav-item v-if="this.$colorMode.preference === 'light'" v-on:click="changeStyle('dark')">
        <font-awesome-icon :icon="['far', 'moon']"/>
      </b-nav-item>


    </b-nav>

    <b-nav v-if="mobile">

      <b-nav-item v-for="item in menu" :key="item.slug">
        <nuxt-link :to="localePath(item.slug)" tag="a"><span @click="$nuxt.$emit('close-sidemenu')">{{$t('menu.'+item.name)}}</span></nuxt-link>
      </b-nav-item>

      <b-nav-item v-if="this.$colorMode.preference === 'dark'" v-on:click="changeStyle('light')">
        <font-awesome-icon :icon="['far', 'sun']"/>
      </b-nav-item>
      <b-nav-item v-if="this.$colorMode.preference === 'light'" v-on:click="changeStyle('dark')">
        <font-awesome-icon :icon="['far', 'moon']"/>
      </b-nav-item>

    </b-nav>
  </div>


</template>

<script>

    import menu from '~/static/data/menu.json'


    export default {
        name: "Navbar",
        props: ['mobile'],
        data() {
            return {
                menu:[],
                showlang: false}
        },
        methods: {
            showLanguage() {
                this.showlang = !this.showlang;
                this.$emit('showLang', this.showlang)
            },
            changeStyle(value) {
                this.$colorMode.preference = value;
            }

        },
        mounted() {

            this.menu= menu.menu;

            this.$nextTick(function () {
                window.addEventListener("scroll", function () {
                    var navbar = document.getElementById("nav");
                    var nav_classes = navbar.classList;
                    if (document.documentElement.scrollTop >= 150) {
                        if (nav_classes.contains("fixed-top") === false) {
                            nav_classes.toggle("fixed-top");
                        }
                    } else {
                        if (nav_classes.contains("fixed-top") === true) {
                            nav_classes.toggle("fixed-top");
                        }
                    }
                })
                console.log(this.mobile);
                console.log(this.$refs.mobile);
            })
        }

    }
</script>

<style lang="scss" scoped>

  .dark-mode{
    .btn-style-dark {
      display: none;
    }
  }

  .nav {
    margin: 20px auto;
    justify-content: center;

    .nav-item {
      padding: 8px 20px;
      border-right: 1px solid #505050;
      text-transform: uppercase;
      letter-spacing: 1px;

      &:last-child {
        border-right: none;
      }

      a {
        padding: 0;
        color: var(--primary-color);

        &:hover {
          text-decoration: none;
        }
      }
    }
  }


  .fixed-top {
    background: white;
    animation: smoothScroll 1s forwards;
  }

  @keyframes smoothScroll {
    0% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0px);
    }
  }

</style>
