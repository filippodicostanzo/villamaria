<template>
  <div class="header">
    <div class="container" id="top">
      <div class="row pt-4">

        <div class="col-12 text-center">
          <Logo></Logo>

          <navbar></navbar>
          <langbox></langbox>
        </div>
        <div class="mobile-menu">
          <button @click="$nuxt.$emit('open-sidemenu')">
            <font-awesome-icon :icon="['fas', 'bars']"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Logo from "./Logo";
    import Navbar from "./Navbar";
    import Langbox from "./Langbox";

    export default {
        name: "Header",
        components: {'logo': Logo, 'navbar': Navbar, 'langbox': Langbox},
        data() {
            return {
                showlang: false,
                showmenu: false
            }
        },
        methods: {
            showLanguage(show) {
                this.showlang = show;
            },
        }
    }
</script>

<style lang="scss" scoped>
  .mobile-menu {
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    z-index: 1;
    border: 0;
    bottom: -25px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: var(--background-button);
    button {
      background: transparent;
      border: none;
      color: var(--primary-color);
      margin: 0 auto;
      padding: 0;
    }

  }

  .header .row {
    position: relative;
  }

</style>
