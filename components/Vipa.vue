<template>
  <div class="container" data-aos="fade-in">
    <div class="row">
      <div class="col-12">
        <div>
        {{$t('home.block_2')}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Vipa"
    }
</script>

<style lang="scss" scoped>
  div.col-12 div {
    background: var(--primary-color);
    color: white;
    border-radius: 9px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 0 15px 2px #00000024;
    margin: 50px auto;
  }
</style>
