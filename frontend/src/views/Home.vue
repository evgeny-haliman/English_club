<template>
  <div class="home">
    <br>
    <div class="header"><h1>{{ $t('h1') }}</h1>
    <h2>{{ $t('h2') }}</h2></div>
    <br>
    <div class="main"><div style="flex-basis:40%; flex-grow:0; flex-shrink:0;"><h3>{{$t('whyImportant')}}</h3><img src="../assets/headphone.png"
                                                                                                             alt="Headphone">
    <p>{{$t(('whyImportantText'))}}</p></div>
      <div style="flex-basis:40%; flex-grow:0; flex-shrink:0;"><h3>{{$t('whatNeed')}}</h3><img src="../assets/viber.png" alt="viber">
      <p>{{$t(('whatNeedText'))}}</p></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'

}
</script>

<style>
  .home{
    min-height: 90vh;
    background-color: #2781d9;
    color: rgba(238,247,242,0.86);
    font-style: italic;
  }
  .header{
  }
  .main{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: large;
  }
  @media all and (max-width: 800px){
    .main{
      flex-direction: column;
    }
  }
</style>
<style scoped>
img{
  width: 150px;
  float: left;
  shape-outside: circle(50%);
}
</style>
