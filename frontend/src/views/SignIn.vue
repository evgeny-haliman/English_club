<template>
  <div class="signin" style="display: flex">
    <br>
    <div class="login" style="flex: 0 1 40vw"><br>dfdf</div>
    <div class="google" style="flex: 0 1 40vw">dfdf</div>
  </div>
</template>
<script>

</script>

<style>
  .signin{
    border-style: solid;
    flex-direction: row;
    justify-content: center;
    height: 80vh;
  }
  @media all and (max-width: 800px){
    .signin{
      flex-direction: column;
    }
  }
  .login, .google {
    background-color: rgba(213,209,229,0.86);
  }
</style>
