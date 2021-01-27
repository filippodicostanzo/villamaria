<template>

  <b-collapse id="collapse-1" class="mt-2" >

    <div class="lang-box vertical-center">
      <div class="container">
        <nuxt-link :to="switchLocalePath('en')" exact>
          <img :src="require(`~/assets/images/en.gif`)">
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('it')" exact>
          <img :src="require(`~/assets/images/it.gif`)">
        </nuxt-link>
        <!--
        <nuxt-link :to="switchLocalePath('fr')">
          <img src="https://www.giordanohotel.it/lib/img/bandiere/fr.gif">
        </nuxt-link>
        -->
        <button v-b-toggle.collapse-1 class="b-button">
          <font-awesome-icon :icon="['fas', 'times']"  /></button>
      </div>
    </div>
  </b-collapse>
</template>

<script>
    export default {
        name: "Langbox"
    }
</script>

<style lang="scss" scoped>

  .container {
    padding: 10px;
    a{
      opacity: 0.6;
    }
    a.nuxt-link-active {
      opacity: 1;
    }
    img {
      margin: 0 5px;
      vertical-align: top;
    }
  }

  .b-button {
    padding: 0;
    border:0;
    background: transparent;
    color: var(--primary-color);
  }

</style>
