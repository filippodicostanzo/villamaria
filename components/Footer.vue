<template>

  <div class="footer mt-10">
    <div class="container">
      <div class="row">

        <div class="col-md-5 col-sm-12">
          <div class="footer-bar-title-left">
            <strong>VILLA MARIA</strong>
            <span>
              <br>HOTEL
              <br>Via S. Chiara, 2
              <br>84010 - Ravello (SA) Italy
              <br> P.Iva 02334010655
              <br> Licenza HTSA000005-0007
            </span>
          </div>
        </div>
        <div class="col-md-2 col-sm-12 text-center">
          <emblems/>
        </div>
        <div class="col-md-5 col-sm-12">
          <div class="footer-bar-title-right">
            <strong>INFO</strong>
            <span>
              <br><font-awesome-icon :icon="['fas', 'phone']"/> +39.089.857255
              <br><font-awesome-icon :icon="['fas', 'fax']"/> +39.089.857071
               <br><font-awesome-icon :icon="['fas', 'envelope']"/> info@villamaria.it
            </span>
          </div>
        </div>

      </div>
    </div>
    <copyright></copyright>
  </div>


</template>

<script>
    import Emblems from "./Emblems";
    import Copyright from "./Copyright";
    export default {
        name: "Footer",
        components: {
            'emblems': Emblems,
            'copyright': Copyright
        }
    }
</script>

<style lang="scss" scoped>
  .footer {
    background: rgb(192, 57, 43);
    background: -moz-linear-gradient(90deg, rgba(192, 57, 43, 1) 0%, rgba(252, 252, 252, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(192, 57, 43, 1) 0%, rgba(252, 252, 252, 1) 100%);
    background: linear-gradient(90deg, rgba(192, 57, 43, 1) 0%, rgba(252, 252, 252, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c0392b", endColorstr="#fcfcfc", GradientType=1);
    .container {
      .row {
        padding: 30px 0;
      }
      .footer-bar-title-left {
        font-family: 'Merriweather', sans-serif;
        text-align: right;
        span {
          line-height: 1.8;
          font-size: 14px;
        }
        strong {
          font-size: 1.4rem;
          color: var(--light-color);
        }
      }
      .footer-bar-title-right {
        font-family: 'Merriweather', sans-serif;
        text-align: left;
        span {
          line-height: 1.8;
          font-size: 14px;
        }
        strong {
          font-size: 1.4rem;
          color: var(--light-color);
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .footer > .container > .row {
      > div:nth-child(1) {
        order: 2;
      }
      >  div:nth-child(2) {
        order:1;
      }
      >  div:nth-child(3) {
        order:3;
      }
      .footer-bar-title-right{
        margin: 10px 0;
        text-align: center;
      }
      .footer-bar-title-left{
        margin: 10px 0;
        text-align: center;
      }
    }
  }
</style>
