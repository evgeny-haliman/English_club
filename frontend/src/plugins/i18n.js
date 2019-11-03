import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    welcomeMsg: 'Welcome to Your Vue.js App',
    home: 'Home',
    about: 'Direction',
    signUp: 'Sign up',
    signIn: 'Sign in',
    ecosystem: 'Ecosystem'
  },
  'ua': {
    welcomeMsg: 'Доброго ранку',
    home: 'Головна',
    about: 'Посібник',
    signUp: 'Реєстрація',
    signIn: 'Увійти',
    ecosystem: 'Ecosistema'
  },
  'ru': {
    home: 'Главная',
    about: 'Пособие',
    signUp: 'Регистрация',
    signIn: 'Войти'
  }
}

const i18n = new VueI18n({
  locale: 'ua', // set locale
  fallbackLocale: 'en ', // set fallback locale
  messages // set locale messages
})

export default i18n
