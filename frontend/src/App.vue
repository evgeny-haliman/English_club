<template>
  <div id="app">
    <div id="nav">
      <div id="flags"><button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
        <flag :iso="entry.flag" v-bind:squared=false />
      </button></div>
      <div id="nav-a"><router-link to="/">{{ $t('home') }}</router-link>
      <router-link to="/about" >{{ $t('about') }}</router-link>
        <router-link to="/contacts">{{ $t('contacts') }}</router-link>
        <router-link to="/signIn">{{ $t('signIn') }}</router-link>
      </div>
      <div id="hamburger">
        <button @click="hamburger"><img src="./assets/burg.png" width="30"  height="30" alt=""></button>
      </div>
    </div>
    <div id="nav-small" v-bind:style="styleObject"><router-link to="/">{{ $t('home') }}</router-link>
      <router-link to="/about" >{{ $t('about') }}</router-link>
      <router-link to="/contacts">{{ $t('contacts') }}</router-link>
      <router-link to="/signIn">{{ $t('signIn') }}</router-link>
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
      styleObject: {
        display: 'none'
      }
    }
  },
  methods: {
    changeLocale (locale) {
      i18n.locale = locale
    },
    hamburger: function () {
      if (this.styleObject.display === 'none') {
        this.styleObject.display = 'flex'
      } else {
        this.styleObject.display = 'none'
      }
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
  background-color: rgba(39, 129, 217, 0.31);
}

 a {
  font-weight: bold;
  color: #42b983;
  padding: 1.5rem  0;
  text-decoration: blink;
   border: 1px solid grey;
}
#nav-a{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
}
#hamburger{
  display: none;
}
@media all and (max-width: 800px) {
  #nav-a { display: none;}
  #hamburger{
    display: block;
  }
  #nav-small{
    display: flex;
    flex-direction: column;
  }
  a{
    padding: 1rem 0;
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}
a:hover{
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
  border: none;
}
#flags{
  margin-left: 5px;
}
  div {
    border: 2px solid red;
  }
</style>
