import React from 'react'
import Aux from '../../hoc/Auxi'
import MyButton from '../UI/Button/Button'
const OrderSummary = (props) => {
const ingredientSummary =Object.keys(props.ingredients)
    .map(igkey => {
      return (<li key ={igkey}>
        <span style ={{textTransform: "capitalize"}}>{igkey}</span> : {props.ingredients[igkey]} 
      </li>)
    })
  return (
    <Aux>
      <h3>Your Order Summary :</h3>
      <p>A delcious burger with the following ingredients : </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price : {props.price.toFixed(2)}</strong></p>
      <p>Continue  to checkout ?</p>
      <MyButton btnType='Danger' clicked ={props.canceled}>Cancel</MyButton>
      <MyButton btnType='Success' clicked ={props.continue}>Continue</MyButton>

    </Aux>
  )
}

export default OrderSummary
