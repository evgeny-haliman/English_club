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
    h2: 'It can be done here and now',
    whyImportant: 'Why it is important',
    whatNeed: 'What is needed for this',
    whyImportantText: 'Any business needs practice. And in the study of language, in addition to theory, a huge role is ' +
      'played by the ability to apply your knowledge while talking with another person. On a walk or at home, at work or ' +
      'on the road - there will always be time for doing what you love!',
    whatNeedText: 'For a conversation, a regular computer is also suitable, of course, with a microphone. A smartphone or ' +
      'tablet is even better, because we use them most often for calls. Well, the presence of your favorite application, with ' +
      'the help of which you will increase the level of your knowledge of a foreign language. After registration, you can call ' +
      'other participants or standby.',
    contacts: 'Contacts'
  },
  'ua': {
    welcomeMsg: 'Доброго ранку',
    home: 'Головна',
    about: 'Посібник',
    signUp: 'Реєстрація',
    signIn: 'Увійти',
    h1: 'Почати спілкуватися на іноземній мові ще не було так просто',
    h2: 'Це можно зробити просто зараз',
    whyImportant: 'Чому це важливо',
    whatNeed: 'Що для цього потрібно',
    whyImportantText: 'У кожній справі потрібна практика. А у вивченні мови окрім теорії величезну роль грає можливість ' +
      'застосувати свої знання під час розмови з іншою людиною. На прогулянці або вдома, на роботі або в дорозі - завжди ' +
      'знайдеться час для улюбленої справи!',
    whatNeedText: 'Для проведення розмови згодиться і звичайний компʼютер, авжеж, за наявності мікрофону. Смартфон або ' +
      'планшет - ще краще, адже саме їх ми частіше за всього використовуємо для дзвінків. Ну і наявність улюбленої ' +
      'програми , за допомогою якої ви і будете підвищувати свій рівень володіння іноземною мовою. Після регістрації ви зможете ' +
      'дзвонити іншим учасникам або стати у режим очікування.',
    contacts: 'Контакти'
  },
  'ru': {
    home: 'Главная',
    about: 'Пособие',
    signUp: 'Регистрация',
    signIn: 'Войти',
    h1: 'Начать общаться на иностранном языке еще не было так просто ',
    h2: 'Это можно сделать здесь и сейчас',
    whyImportant: 'Почему это важно',
    whatNeed: 'Что для этого нужно',
    whyImportantText: 'В любом деле нужна практика. А в изучении языка помимо теории огромную роль играет возможность ' +
      'применить свои знания во время разговора с другим человеком. На прогулке или дома, на работе или в дороге - всегда ' +
      'найдется время для занятия любимым делом!',
    whatNeedText: 'Для проведения разговора подойдет и обычный компьютер, конечно же, при наличии микрофона. Смартфон или ' +
      'планшет - ещё лучше, ведь именно их мы чаще всего используем для звонков. Ну и наличие любимого приложения, с помощью ' +
      'которого вы и будете повышать уровень своего владения иностранным языком. После регистрации вы сможете позвонить ' +
      'другим участникам или стать в режим ожидания.',
    contacts: 'Контакты'
  }
}

const i18n = new VueI18n({
  locale: 'ua', // set locale
  fallbackLocale: 'en ', // set fallback locale
  messages // set locale messages
})

export default i18n
