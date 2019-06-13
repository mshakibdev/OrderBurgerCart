import React from 'react'
import CssClasses from './Backdrop.module.css'
const backdrop = (props) => (

  props.show ? <div className={CssClasses.Backdrop} onClick={props.clicked} /> : null
)

export default backdrop
