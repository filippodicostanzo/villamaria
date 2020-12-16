<template>
  <div data-aos="fade-up">
    <img :src="require(`~/assets/images/emblem-light.png`)" height="200" alt="Stemma Villa Maria" class="emblem-light">
    <img :src="require(`~/assets/images/emblem-dark.png`)" height="200" alt="Stemma Villa Maria" class="emblem-dark">
  </div>
</template>

<script>
    export default {
        name: "Emblems"
    }
</script>

<style lang="scss" scoped>
img {
  margin-top: -100px;
}

.dark-mode {
  .emblem-light {
    display: none;
  }
}

.light-mode {
  .emblem-dark {
    display: none;
  }
}

</style>
