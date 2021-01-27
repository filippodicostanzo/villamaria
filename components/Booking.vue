<template>
  <div class="booking">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-lg-5 col-md-4 col-sm-12">
          <div class="booking-bar-title">
            <strong>PRENOTA</strong> IL TUO SOGGIORNO<span> <br>Saremo lieti di ospitarti nel nostro hotel</span>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-12 text-center">
          <emblems/>
        </div>
        <div class="col-lg-5 col-md-4 col-sm-12">
          <client-only>
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <label> Check In</label>
                <date-picker
                  placeholder="DD/MM/YYYY"
                  format="dd/MM/yyyy" :language="it" v-model="dateIn" @selected="setDateOut"
                  input-class="form-control"/>
              </div>

              <div class="col-lg-3 col-md-6">
                <label> Check Out</label>
                <date-picker
                  placeholder="DD/MM/YYYY"
                  format="dd/MM/yyyy" :language="it" v-model="dateOut" input-class="form-control"/>
              </div>

              <div class="col-lg-3 col-md-6">
                <label> Guests</label>
                <select class="form-control" v-model="guests">
                  <option value="">Choose</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div class="col-lg-3 col-md-6">
                <label>&nbsp;</label>
                <button type="button" class="btn btn-light" v-on:click="sendReservation()">Send</button>
              </div>

              <div class="col-12" v-if="error">
                <p class="text-danger text-center">compila correttamente tutti i campi</p>
              </div>

            </div>


          </client-only>
        </div>

      </div>
      <div class="row no-padding">
        <div class="col-md-6 offset-md-3 promo-banner">
          <p class="text-center">Prenota con noi Miglior prezzo garantito + Parcheggio gratuito</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery';
    import {en, it} from 'vuejs-datepicker/dist/locale'
    import Emblems from "./Emblems";


    export default {

        name: "Booking",
        data() {
            return {
                dateIn: new Date(),
                dateOut: new Date(),
                en: en,
                it: it,
                guests: '',
                error: false
            }
        },

        components: {'emblems': Emblems},

        methods: {
            setDateOut() {
                this.$nextTick(() => {
                    if (this.$dateFns.isAfter(new Date(this.dateIn), new Date(this.dateOut))) {
                        this.dateOut = this.$dateFns.addDays(this.dateIn, 1)
                    }
                })
            },
            sendReservation() {
                console.log(this.guests);
                if (this.guests === '') {
                    this.error = true;
                } else {
                    let url = `https://booking.ericsoft.com/BookingEngine/Book?idh=ECB9C3FDE9F8B0B9&lang=${this.$i18n.locale}&arrival=${this.$dateFns.format(this.dateIn, 'dd/MM/yyyy')}&departure=${this.$dateFns.format(this.dateOut, 'dd/MM/yyyy')}&pax=${this.guests}`;
                    this.error = false;
                    window.open(url, '_blank');
                }
            }
        },
        mounted() {
            this.dateOut.setDate(this.dateOut.getDate() + 1);
            console.log();

            $('document').ready(function () {
                //$('.dtp').bootstrapMaterialDatePicker();
            })
        }
    }
</script>

<style lang="scss" scoped>

  .booking {
    background: rgb(192, 57, 43);
    background: -moz-linear-gradient(90deg, rgba(192, 57, 43, 1) 0%, rgba(252, 252, 252, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(192, 57, 43, 1) 0%, rgba(252, 252, 252, 1) 100%);
    background: linear-gradient(90deg, rgba(192, 57, 43, 1) 0%, rgba(252, 252, 252, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c0392b", endColorstr="#fcfcfc", GradientType=1);

    font-family: "Merriweather", serif;

    .col-lg-3, .col-md-6 {
      padding: 5px;
    }

    .container {

      .row {
        padding: 30px 0;
      }


      .booking-bar-title {


        strong {
          font-size: 2rem;
          color: var(--light-color);
        }
      }

      label {
        display: block;
      }

      button {
        width: 100%;
      }

      .promo-banner {
        background: var(--primary-color);
        color: white;
        border-radius: 9px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 0 15px 2px rgba(0,0,0,0.14118);
        p{
          margin: 0;
        }
      }

    }


  }

  @media only screen and (max-width: 767px) {

    .booking-bar-title {
      text-align: center;
    }

    .booking > .container > .row {
      > div:nth-child(1) {
        order: 2
      }

      > div:nth-child(2) {
        order: 1
      }

      > div:nth-child(3) {
        order: 3
      }
    }

  }


</style>
