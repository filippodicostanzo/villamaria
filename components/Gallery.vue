<template>
  <div>
    <div class="row" id="lightgallery">

      <div v-for="image in items" class="col-md-4 p-3" :data-src="image.src">
        <a :href="image.src">
          <div class="lg-thumbnails"
               :style="{'background-image': 'url(' + image.src+')'}">
            <div class="rollover">
              <div class="zoomBtn">
                <span><font-awesome-icon :icon="['fas', 'search-plus']"/></span></div>
            </div>
          </div>
        </a>
      </div>


    </div>
  </div>
</template>

<script>
    export default {
        name: "Gallery",
        props: ['gallery'],
        data() {
            return {
                items: [],
            }
        },
        mounted() {
            setTimeout(() => {
                this.createGallery();
            }, 1)
        },
        methods: {
            createGallery() {
                var cache = {};
                var images = [];

                if (this.gallery === 'restaurant') {
                    images = require.context('../static/images/gallery/restaurant/', false, /\.jpg$/);
                }

              if (this.gallery === 'virtual-tour') {
                images = require.context('../static/images/gallery/virtual-tour/', false, /\.jpg$/);
              }


              if (this.gallery === 'standard-double') {
                    images = require.context('../static/images/gallery/standard-double/', false, /\.jpg$/);
                }

                if (this.gallery === 'basic-double') {
                    images = require.context('../static/images/gallery/basic-double/', false, /\.jpg$/);
                }

                if (this.gallery === 'junior-suite') {
                    images = require.context('../static/images/gallery/junior-suite/', false, /\.jpg$/);
                }

                if (this.gallery === 'comfort-double') {
                    images = require.context('../static/images/gallery/comfort-double/', false, /\.jpg$/);
                }

                if (this.gallery === 'family') {
                    images = require.context('../static/images/gallery/family/', false, /\.jpg$/);
                }

                if (this.gallery === 'superior-double') {
                    images = require.context('../static/images/gallery/superior-double/', false, /\.jpg$/);
                }

                if (this.gallery === 'deluxe-double') {
                    images = require.context('../static/images/gallery/deluxe-double/', false, /\.jpg$/);
                }

              if (this.gallery === 'suite') {
                images = require.context('../static/images/gallery/suite/', false, /\.jpg$/);
              }



                var imagesArray = Array.from(images.keys());
                var constructed = [];
                this.items = this.constructItems(imagesArray, constructed);
                const el = document.getElementById('lightgallery', this.lgOptions);
                setTimeout(() => {
                    window.lightGallery(el)
                }, 100);
            },

            constructItems(fileNames, constructed) {
                fileNames.forEach(fileName => {
                    constructed.push({
                        'src': '/images/gallery/' + this.gallery + '/' + fileName.substr(1)
                    })
                });
                return constructed;
            }
        }
    }
</script>

<style lang="scss" scoped>
  .lg-thumbnails {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    position: relative;

    .rollover {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      padding: 15px 15px;
      border: 1px solid #fff;
      background-color: rgba(180, 140, 44, 0);
      color: #fff;
      text-align: center;
      -webkit-transition: all .2s linear;
      -moz-transition: all .2s linear;
      transition: all .2s linear;

      .zoomBtn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      span {
        display: inline;
        text-align: center;
        padding: 0px;
        font-size: 20px;
        opacity: 0.8;
      }

    }

    &:hover {
      .rollover {
        background-color: var(--primary-color-opacity);
        width: 100%;
        height: 100%;

      }
    }

  }
</style>
