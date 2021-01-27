<template>
    <div class="overlay" ref="popup">
      <div class="popup"  data-aos="zoom-in" data-aos-duration="1000">
        <div class="close"><button class="close-button" @click="closePopup">
          <font-awesome-icon :icon="['fas', 'times']"  /></button>
        </div>
        <h1>{{$t('covid.title')}}</h1>
        <p>{{$t('covid.desc')}}</p>
        <a href="pdf/anticovid.pdf" target="_blank"><p class="text-center">{{$t('covid.read')}}</p></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Popup.vue",
        methods: {
            closePopup() {
                this.$nextTick(() => {
                    let body  = document.getElementsByTagName("body")[0];
                    if (body.classList.contains('overflow-hidden')) {
                        body.classList.remove('overflow-hidden');
                        this.$refs.popup.classList.add('d-none')
                    }
                    this.$store.commit('popup/remove');
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
  .overlay {
    background: rgb(0 0 0 / 80%);
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 9;
    top: 0;
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      padding: 20px;
      background: lightgray;
      transform: translate(-50%, -50%);
      width: 80%;

      @media screen and (min-width: 1092px) {
        transform: translate(-50%, -50%);
        width: 50%;
      }


      .close-button {
        border:0;
        background: transparent;
        color: var(--dark-color);
      }

      h1{
        text-align: center;
        color: var(--dark-color);
      }
      p{
        text-align: justify;
        color: var(--dark-color);
      }
    }
  }

</style>

