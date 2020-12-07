import {createContext} from 'react'
export const LangContext = createContext({
    EN :{
        lang: 'en',
        mainPage: { login: 'Sing In', about: 'About', team: 'Our Team', tryButton: "Try It", downloadButton: "Download" },
        LoginPage: { tittle: 'Login', button: 'Press to log in', emailPh: 'Email', passwordPh: 'Password' },
        registrationPage: { tittle: 'Registration', button: 'Press to Reg New', email: 'Email', password: 'Password', repeatPassword: 'Repeat Password', name: 'Name', surname: 'Surname', nickname: 'Nickname' }
    },
    RU: {
        lang: 'ru',
        mainPage: { login: 'Войти', about: 'О нас', team: 'Наша Команда', tryButton: "Пробовать", downloadButton: "Скачать" },
        reg: { tittle: 'Войти', button: 'Залогиниться', emailPh: 'Емайл', passwordPh: 'Пароль' }
    },
    UA: {
        lang: 'ua',
        mainPage: { login: 'Логин', about: 'Аб нас', team: 'Наша Команда', tryButton: "Поспытаты" , downloadButton: "Заванжтажитб" },
        reg: { tittle: 'Login', button: 'Press to login', emailPh: 'Email', passwordPh: 'Password' }
    },
    BY: {
        lang: 'by',
        mainPage: { login: 'Увайсцi', about: 'Аб нас', team: 'Наша Каманда',  tryButton: "Спрабаваць", downloadButton: "Спампаваць" },
        reg: { tittle: 'Увайсцi', button: 'Нaцiскай Ёпта', emailPh: 'ЕПошта', passwordPh: 'Пароль' }
    }
})