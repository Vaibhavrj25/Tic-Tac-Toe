import React from 'react';
import "./ScoreBoard.css"

export const ScoreBoard = ({scores,xPlaying}) => {
    const {xScore,oScore}= scores;

    return(
        <div className="ScoreBoard">
      
        <span className={'score x-score s{!xplaying && "inactive"}'}>X -{xScore}</span>
        <span className={'score o-score s{xplaying && "inactive"}'}>O -{oScore}</span>
        </div>
    )
}
