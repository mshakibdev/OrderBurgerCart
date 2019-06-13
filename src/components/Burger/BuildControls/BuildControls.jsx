import React from 'react'
import CssClasses from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }

]
const buildControls = (props) => (
  <div className={CssClasses.BuildControls}>
    <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientsAdded(ctrl.type)}
        removed={() => props.ingredientsRemoved(ctrl.type)}
        disabled={props.ingredientsDisabled[ctrl.type]}
      />
    ))}
    <button className={CssClasses.OrderButton}
      disabled={!props.purchasable}
      onClick={props.orderd}
    >ORDER NOW</button>
  </div>

)

export default buildControls
