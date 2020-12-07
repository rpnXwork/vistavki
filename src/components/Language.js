
import React, {useContext, useState, useEffect, useRef} from 'react'
import {EN, RU, UA, BY} from '../languages/locale'
import {AuthContext} from '../context/AuthContext'


export const Language = () => {

    const context = useContext(AuthContext)
    console.log(context)

    let langonsite = localStorage.getItem('lang')

    const [language, setLanguage] = useState(langonsite)

    const langchanger=(e)=>{
        if (e === 'en') {
            localStorage.setItem('lang', JSON.stringify(EN))
            context.language = EN
            setLanguage(context.language)
        } else if (e === 'ru') {
          setLanguage(RU.main)
            localStorage.setItem('lang', JSON.stringify(RU))
            context.language = RU
            setLanguage(context.language)
        } else if (e === 'ua') {
          setLanguage(UA.main)
            localStorage.setItem('lang', JSON.stringify(UA))
            context.language = UA
            setLanguage(context.language)
        } else {
          setLanguage(BY.main)
            localStorage.setItem('lang', JSON.stringify(BY))
            context.language = BY
            setLanguage(context.language)
        }
    }

    useEffect(()=>{
  
    },[language])

    const handleSelectChange = (e) => {
        langchanger(e.target.value) 
    }
    
        return (
            <div className="langselect">
                <div className="menu-item lang">
                    <select className="select-lang" value = {langonsite.lang} onChange={(e)=> handleSelectChange(e)}>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        {/* <option value="ua">Ukrainian</option> */}
                        <option value="by">BY</option>
                    </select>
                </div>   
            </div> 
        ) 
    
}