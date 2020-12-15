import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import {useMessage} from '../hooks/message.hook'
import {Timer} from '../components/Timer'
import {Loaderr} from '../components/Loaderr'
import {useHttp} from '../hooks/http.hook'
import {API, PORT} from '../api'
import './style/ActivatePage.css'

export const ActivatePage = () => {
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const [mes, setMes] = useState(null)
    const [load, setLoad] = useState(0)

    let { code } = useParams();

    useEffect(() => {
        message(mes)
        message(error)
        clearError()
      }, [error, message, clearError, mes])

      useEffect(() => {
        window.M.updateTextFields()
      }, [])

    const Confirmation = async () => {
        try{
            const data = await request(`${API}${PORT}/activate/${code}`, 'GET')
            setMes(data.message)
            setLoad(1)
        } catch(e){
            setLoad(2)
        }  
    }

    useEffect(()=>{
        setTimeout(() => {
            Confirmation()
        }, 1000);
    })

    if (load === 0) 
    {
        return (
        <div className="loading-center">
            <Loaderr />  
            <div className="activayionpage-text">You confirmation code: {code}</div>       
        </div>
        )
    }
    if (load === 2) {
        return (
        <div className="loading-center">    
            <div className="activayionpage-text">
                Something Wrong? try again 
                You will redirect to registration page after  <Timer timeout={5000} adress={'/reg'}/> sec.
            </div>
        </div>
        )
    }
    return (
        <div className="loading-center">    
            <div className="activayionpage-text">
                Congratulation! You part of the system!
                You will redirect to logina page after <Timer timeout={5000} adress={'/login'}/> sec.
            </div>
        </div>
    )
}
