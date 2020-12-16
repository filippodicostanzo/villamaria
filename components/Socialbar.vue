<template>
  <div>

    <div class="facebook">
      <a href="https://www.facebook.com" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook']"/>
      </a>
    </div>


  </div>

</template>

<script>
    export default {
        name: "Socialbar"
    }
</script>

<style lang="scss">
  .facebook, .instagram {
    position: fixed;
    left: 20px;
    bottom: 20px;
    border: 0;
    outline: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: background-color 200ms;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #fcfcfc;
    text-align: center;
    padding: 8px;

    svg {
      font-size: 1.5rem;
    }
  }


</style>
