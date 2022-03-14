<template>
  <div class="card">
    <div class="card-header">
      <img :src="item.image" alt="Cooking Class" class="w-100">
    </div>
    <emblems class="small text-center"></emblems>
    <div class="card-body text-center">
      <h2 v-if="$i18n.locale==='it'">{{item.title.it}}</h2>
      <h2 v-if="$i18n.locale==='en'">{{item.title.en}}</h2>
      <p class="text-justify" v-if="$i18n.locale==='it'">{{item.desc.it}}</p>
      <p class="text-justify" v-if="$i18n.locale==='en'">{{item.desc.en}}</p>
    </div>
  </div>
</template>

<script>
    import Emblems from "./Emblems";
    export default {
        name: "Card",
        props: ['item'],
        mounted () {
            console.log(this.item);
        },
        components: {Emblems}
    }
</script>

<style lang="scss">
  .card-header {
    padding: 0;
  }
  .small {
    img{
      height: 100px;
      margin-top: -50px !important;
    }
  }
</style>
