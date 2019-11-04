<template>
  <div class="home">
    <div class="header"><h1>Начать общаться на иностранном языке еще не было так просто </h1>
    <h2>Это можно сделать здесь и сейчас</h2></div>
    <div class="main"><div style="flex-basis:50%; flex-grow:0; flex-shrink:0;"><h3>Почему это важно</h3>
    <p>В любом деле нужна практика. А в изучении языка помимо теории огромную роль играет возможность применить свои знания
      во время разговора с другим человеком.
    </p></div>
      <div></div>
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
    justify-content: space-between;
  }
  @media all and (max-width: 800px){
    .main{
      flex-direction: column;
    }
  }
</style>
