import React, {useContext, useState, useEffect} from 'react'
import Video from './Video';
import {AuthContext} from '../context/AuthContext'
import { Loaderr } from '../components/Loaderr';

const Main = ({l}) => {

    return (
        <div>
            <Video/>
                <div className="buttons">
                    <button className="button">{l.mainPage.tryButton}</button>
                    <button className="button">{l.mainPage.downloadButton}</button>
                </div>
            
        </div>
    )
}
    
export default Main;
