<template>
  <div id="app">
    <div id="nav">
      <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
        <flag :iso="entry.flag" v-bind:squared=false /> <!--{{entry.title}}-->
      </button>
      <router-link to="/">{{ $t('home') }}</router-link>
      <router-link to="/about" >About</router-link>

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
  padding: 10px;
  border-style: solid;
  border-color: red;
  display: flex;
  flex-direction: row;

}

#nav a {
  font-weight: bold;
  color: green;
  padding: 2rem;

}

#nav a.router-link-exact-active {
  color: #42b983;
}
  body{
    margin: 0px;
  }
button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
  div {
    border: 2px solid red;
  }
</style>
