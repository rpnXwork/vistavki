import React, {useContext} from 'react'
import {Main} from './Main'
import {Header} from './Header'
import {Footer} from './Footer'
import {LanguageContext} from '../context/LanguageContext'

export const MainPage = () => {

    const [l] = useContext(LanguageContext)

    return (
        <>
            <Header l={l}/>
            <Main l={l}/>
            <Footer l={l}/>
        </>
    )
}
