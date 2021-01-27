<template>
  <div>
    <popup v-if="this.$store.state.popup.active"></popup>
    <booking-small></booking-small>
    <slider :slides="slides"></slider>
    <slogan></slogan>
    <vipa></vipa>
    <homebox></homebox>
    <showcase></showcase>
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
    import {BookingSmall, Popup} from "../.nuxt/components";

    export default {
        components: {
            'vue-header': Header,
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
            'popup': Popup,
            'booking-small': BookingSmall
        },

        data() {
            return {
                slides: [
                    require(`~/assets/images/slider-01.jpg`),
                    require(`~/assets/images/slider-02.jpg`)
                ]
            }

        },

        mounted() {
            let body  = document.getElementsByTagName("body")[0];

            if(this.$store.state.popup.active) {

                if (!body.classList.contains('overflow-hidden')) {
                    body.classList.add('overflow-hidden');
                }
            }

            this.$nextTick(() => {
                    this.$nuxt.$loading.start();
                    setTimeout(() => this.$nuxt.$loading.finish(), 500);
                }
            );



        },


    }
</script>

<style lang="scss">

</style>
