const EN = {
    lang: 'en',
    mainPage: { login: 'Sing In', about: 'About', team: 'Our Team', tryButton: "Try It", downloadButton: "Download", exitButton: 'Exit'},
    LoginPage: { tittle: 'Login', button: 'Press to log in', emailPh: 'Email', passwordPh: 'Password', text: 'Have no acount? Go to ', link: 'registration', endtext: ' page'},
    registrationPage: { tittle: 'Registration', button: 'Enter', email: 'Email', password: 'Password', repeatPassword: 'Repeat Password', name: 'Name', surname: 'Surname', nickname: 'Nickname' },
    validationMessages: {
        email: "Enter Email",
        emailvalid: "Wrong Email Format",
        password: "Enter Password",
        passwordvalid: "Password must contain letters and numbear or _",
        passwordLen: "Password low than 8 symbol",
        repeatPassword: "Repeat you password",
        repeatPasswordMatch: "Passwords not match",
        nickname : "Enter Nickname",
        nicknameLen : "NickName must be more 3 than symbols",
        name : "Enter you Name",
        nameLen : "Name must be more than 3 symbols",
        surname: "Enter you Surname"
    }
}

const RU = {
    lang: 'ru',
    mainPage: { login: 'Войти', about: 'О нас', team: 'Наша Команда', tryButton: "Пробовать", downloadButton: "Скачать", exitButton: 'Выход'},
    LoginPage: { tittle: 'Вход', button: 'Войти', emailPh: 'Email', passwordPh: 'Пароль', text: 'Нет Акаунта? ', link: 'Страница регистрации', endtext: ''},
    registrationPage: { tittle: 'Регистрация', button: 'Зарагестрироваться', email: 'Email', password: 'Пароль', repeatPassword: 'Повторить Пароль', name: 'Имя', surname: 'Фамилия', nickname: 'Ник' },
    validationMessages: {
        email: "Введите Email",
        emailvalid: "Неправильный формат Email",
        password: "Введите Пароль",
        passwordvalid: "Пароль может модержать только цифры, буквы и _",
        passwordLen: "Пароль должен быть не короче 8 символов",
        repeatPassword: "Повторите пароль",
        repeatPasswordMatch: "Повторенный пароль не совпадает",
        nickname : "Введите Ник",
        nicknameLen : "Никнейм должен быть не короче 3 символов",
        name : "Введите имя",
        nameLen : "Имя должно быть не менее 3 символов",
        surname: "Введите Фамилию"
    }
}

const BY = {
    lang: 'by',
    mainPage: { login: 'Уваход', about: 'Аб нас', team: 'Наша Каманда',  tryButton: "Спрабаваць", downloadButton: "Спампаваць", exitButton: 'Выйсцi'},
    LoginPage: { tittle: 'Уваход', button: 'Увайсцi', emailPh: 'Email', passwordPh: 'Пароль', text: 'Няма акаўнту? ', link: 'Старонка Рэгiстрацыi', endtext: ''},
    registrationPage: { tittle: 'Рэгiстрацыя', button: 'Зарэгестрыравацца', email: 'Email', password: 'Пароль', repeatPassword: 'Паўтарыць Пароль', name: 'Iмя', surname: 'Фамiлiя', nickname: 'Нiк' },
    validationMessages: {
        email: "Введите Email",
        emailvalid: "Wrong Email Format",
        password: "Enter Password",
        passwordvalid: "Пароль может модержать только цифры, буквы и _",
        passwordLen: "Password low than 8 symbol",
        repeatPassword: "Repeat you password",
        repeatPasswordMatch: "Passwords not match",
        nickname : "Enter Nickname",
        nicknameLen : "NickName must be more 3 than symbols",
        name : "Enter you Name",
        nameLen : "Name must be more than 3 symbols",
        surname: "Enter you Surname"
    }
}

export {EN, RU, BY}