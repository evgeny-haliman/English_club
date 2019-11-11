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

</script>

<style>
  .home{
    min-height: 90vh;
    background-color: #2781d9;
    color: rgba(238,247,242,0.86);
    font-style: italic;
  }
</style>
