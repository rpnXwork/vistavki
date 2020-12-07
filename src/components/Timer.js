
import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'


export const Timer = ({timeout, adress}) => {

    const [timer, setTimer] = useState(false)
    const [a,setA] = useState(timeout/1000)

    var index = a;
    var timerId = setInterval(function() {
            index--;
            setA(index)
    }, 1000);

    useEffect(()=>{
        setTimeout(() => {
                clearInterval(timerId)
                setTimer(true)   
        }, timeout);
    })  

    if(timer) {
        return (
            <div>
               <Redirect to={adress} /> 
            </div>
            
        ) 
    }
    return(<span>{a}</span>)  
}