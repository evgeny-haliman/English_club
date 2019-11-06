<template>
  <div class="home">
    <br>
    <div class="header"><h1>{{ $t('h1') }}</h1>
    <h2>{{ $t('h2') }}</h2></div>
    <br>
    <div class="main"><div style="flex-basis:40%; flex-grow:0; flex-shrink:0;"><h3>Почему это важно</h3>
    <p>В любом деле нужна практика. А в изучении языка помимо теории огромную роль играет возможность применить свои знания
      во время разговора с другим человеком. На прогулке или дома, на работе или в дороге - всегда найдется время для занятия любимым делом!
    </p></div>
      <div style="flex-basis:40%; flex-grow:0; flex-shrink:0;"><h3>Что для этого нужно</h3>
      <p>Для проведения разговора подойдет и обычный компьютер, конечно же, при наличии микрофона. Смартфон или планшет - ещё лучше,
      ведь именно их мы чаще всего используем для звонков. Ну и наличие любимого приложения, с помощью которого вы и будете повышать
      уровень своего владения иностранным языком. После регистрации вы сможете позвонить другим участникам или стать в режим ожидания.</p></div>
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
