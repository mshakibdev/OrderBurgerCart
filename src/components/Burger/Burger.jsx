import React from 'react'
import CssClasses from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  let transformIngredient =
    Object.keys(props.ingredients).map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, index) => {
        return <BurgerIngredient key={igkey + index} type={igkey} />
      })
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  // console.log(transformIngredient);

  if (transformIngredient.length === 0) {
    transformIngredient = <p>Please Insert Ingredients!</p>
  }

  return (
    <div className={CssClasses.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformIngredient}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger
