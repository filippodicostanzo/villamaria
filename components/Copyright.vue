<template>
  <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <nuxt-link :to="localePath('privacy')">Privacy Policy</nuxt-link> -
          <nuxt-link :to="localePath('cookie')">Cookie Policy</nuxt-link>
        </div>
        <div class="col-md-4 text-center">Made with
          <font-awesome-icon :icon="['fas', 'heart']"/>
          by Locali D'Autore
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Copyright"
  }
</script>

<style lang="scss" scoped>

  .copyright {
    background-color: var(--primary-color);
    color: var(--light-color);
    padding: 10px;

    a {
      color: var(--secondary-color);
      &:hover {
        text-decoration: none;
      }
    }
  }

</style>
