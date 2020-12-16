<template>
  <div data-aos="fade-up">
    <nuxt-link :to="localePath('index')">
      <img :src="require(`~/assets/images/logo-dark.png`)" class="logo-dark">
      <img :src="require(`~/assets/images/logo-light.png`)" class="logo-light">
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
  .dark-mode {
    .logo-light {
      display: none;
    }
  }

  .light-mode {
    .logo-dark {
      display: none;
    }
  }
</style>
