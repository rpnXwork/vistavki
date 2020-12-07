import React from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'

export const MainPage = ({l}) => {

    return (
        <>
            <Header l={l}/>
            <Main l={l}/>
            <Footer l={l}/>
        </>
    )
}
