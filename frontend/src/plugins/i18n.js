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
    h1: 'Getting started in a foreign language hasn’t been so easy',
    h2: 'It can be done here and now'

  },
  'ua': {
    welcomeMsg: 'Доброго ранку',
    home: 'Головна',
    about: 'Посібник',
    signUp: 'Реєстрація',
    signIn: 'Увійти',
    h1: 'Почати спілкуватися на іноземній мові ще не було так просто',
    h2: 'Це можно зробити просто зараз'
  },
  'ru': {
    home: 'Главная',
    about: 'Пособие',
    signUp: 'Регистрация',
    signIn: 'Войти',
    h1: 'Начать общаться на иностранном языке еще не было так просто ',
    h2: 'Это можно сделать здесь и сейчас'
  }
}

const i18n = new VueI18n({
  locale: 'ua', // set locale
  fallbackLocale: 'en ', // set fallback locale
  messages // set locale messages
})

export default i18n
