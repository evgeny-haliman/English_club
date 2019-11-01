import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    welcomeMsg: 'Welcome to Your Vue.js App',
    home: 'Home',
    about: 'About',
    plugins: 'Installed CLI Plugins',
    links: 'Essential Links',
    ecosystem: 'Ecosystem'
  },
  'ua': {
    welcomeMsg: 'Доброго ранку',
    home: 'Головна',
    about: 'О нас',
    plugins: 'Plugins de CLI instalados',
    links: 'Enlaces esenciales',
    ecosystem: 'Ecosistema'
  },
  'ru': {
    home: 'Главная',
    about: 'О нас'
  }
}

const i18n = new VueI18n({
  locale: 'ua', // set locale
  fallbackLocale: 'en ', // set fallback locale
  messages // set locale messages
})

export default i18n
