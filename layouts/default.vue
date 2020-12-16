<template>
  <div>
    <div class="container-fluid p-0">
      <client-only>
        <vue-header></vue-header>

        <Nuxt/>

        <carousel></carousel>
        <vue-footer></vue-footer>
        <social-bar></social-bar>
        <sidenav></sidenav>
        <back-to-top></back-to-top>
        <CookieControl locale="it"/>
      </client-only>
    </div>
  </div>
</template>


<script>

    import Header from "../components/Header";
    import Slider from "../components/Slider";
    import Booking from "../components/Booking";
    import Slogan from "../components/Slogan";
    import Vipa from "../components/Vipa";
    import Homebox from "../components/Homebox";
    import Showcase from "../components/Showcase";
    import Carousel from "../components/Carousel";
    import Backtotop from "../components/Backtotop";
    import Footer from "../components/Footer"
    import Socialbar from "../components/Socialbar";
    import Sidenav from "../components/Sidenav";

    export default {
        components: {
            'vue-header': Header,
            'sidenav': Sidenav,
            'slider': Slider,
            'booking': Booking,
            'slogan': Slogan,
            'vipa': Vipa,
            'homebox': Homebox,
            'showcase': Showcase,
            'carousel': Carousel,
            'back-to-top': Backtotop,
            'vue-footer': Footer,
            'social-bar': Socialbar,

        },
    }

</script>

<style>

</style>
