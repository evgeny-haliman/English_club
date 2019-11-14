<template>
  <div class="signin" style="display: flex">
    <br>
    <div class="login" style="flex: 0 1 40vw"><h2>{{ $t('login') }}</h2>
      <h3>{{ $t('viaMail') }}</h3>
      <form action="signIn" method="post">
        <div class="imgcontainer">
          <img src="../assets/login.png" alt="Avatar" class="avatar" width="60">
        </div>
      </form>
    </div>
    <div class="google" style="flex: 0 1 40vw"><br><br>
      <h3>{{ $t('otherLogin') }}</h3>
    </div>
  </div>
</template>
<script>

</script>

<style>
  .signin{
    border-style: solid;
    flex-direction: row;
    justify-content: center;
    height: 90vh;
    background-color: #2781d9;
    align-items: center;
  }
  @media all and (max-width: 800px){
    .signin{
      flex-direction: column;
    }
  }
  .login, .google {
    background-color: #FCE1E5;
    height: 80vh;
  }
</style>
