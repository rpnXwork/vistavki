import React from 'react'
import Video from './Video'

export const Main = ({l}) => {

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

