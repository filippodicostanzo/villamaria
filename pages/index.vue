<template>
  <div>
    <slider :slides="slides"></slider>
    <booking></booking>
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
            'social-bar': Socialbar
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
