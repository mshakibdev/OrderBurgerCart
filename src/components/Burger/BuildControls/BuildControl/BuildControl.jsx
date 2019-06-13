import React from 'react';
import CssClasses from './BuildControl.module.css';
const BuildControl = (props) => (
    <div className={CssClasses.BuildControl}>
        <div className={CssClasses.Label}>{props.label}</div>
        <button 
        className={CssClasses.Less}  
        onClick={props.removed } 
        disabled={props.disabled}>Less
        </button>
        
        <button 
        className={CssClasses.More} 
        onClick={props.added }>More
        </button>
    </div>
);

export default BuildControl;