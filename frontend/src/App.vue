<template>
  <div id="app">
    <div id="nav">
      <div id="flags"><button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
        <flag :iso="entry.flag" v-bind:squared=false /> <!--{{entry.title}}-->
      </button></div>
      <div id="nav-a"><router-link to="/">{{ $t('home') }}</router-link>
      <router-link to="/about" >About</router-link></div>
      <div id="hamburger">
        <button><img src="./assets/burg.png" width="30"  height="30" alt=""></button>
      </div>
      <!--<select v-model="selected">
        <option disabled value="">Ukrainian</option>
        <option v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)"><flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}</option>
        <option></option>
      </select>-->

    </div>
    <router-view/>
  </div>
</template>

<script>

import i18n from '@/plugins/i18n'

export default {
  name: 'app',

  data () {
    return {
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'ua', language: 'ua', title: 'Ukrainian' },
        { flag: 'ru', language: 'ru', title: 'Russian' }
      ],
      selected: ''
    }
  },
  methods: {
    changeLocale (locale) {
      i18n.locale = locale
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;
  border-style: solid;
  border-color: red;
  display: flex;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: green;
  padding: 2rem  0;
  text-decoration: blink;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a:hover{
  color: #0074D9;
}
  body{
    margin: 0px;
  }
button {
  padding: 10px;
  /*border: 1px solid green;*/
  font-size: 18px;
  margin: 10px;
}
#flags{
  margin-left: 5px;
}
  div {
    border: 2px solid red;
  }
  #hamburger{
    display: none;
  }

</style>
