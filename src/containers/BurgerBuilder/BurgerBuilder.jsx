import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';



const INGREDIENT_PRICES  = {

  salad:0.5,
  cheese:0.4,
  meat :1.3,
  bacon :0.7,

}


class BurgerBuilder extends Component {

  state = {

    ingredients: {
      salad :0,
      bacon :0 ,
      cheese:0 ,
      meat : 0 
    //Key  : value
    },
    totalPrice :4,
    purchasable:false,
    purchasing :false
  }

  updatePurchaseState(ingredients){

    const sum = Object.keys(ingredients)//converts object into array
    .map(igkey =>{
      return ingredients[igkey];
    })
    .reduce((sum,el)=>{
      return sum+el ;

    },0);

    
    this.setState({purchasable:sum>0});
  }

  addIngredientHandeler = (type) => {
    //console.log(type);
    const oldCount = this.state.ingredients[type];//type['salad']//returns value for key salad
    //console.log(oldCount);
    
    const updatedCount = oldCount +1;

    const updatedIngredients = 
    {
      ...this.state.ingredients
    } 


    updatedIngredients[type] = updatedCount;
    //console.log(updatedIngredients)

    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition ;

    this.setState({totalPrice : newPrice ,ingredients : updatedIngredients} )
    this.updatePurchaseState(updatedIngredients);

  }

  removeIngredientHandeler = (type) => {
    const oldCount = this.state.ingredients[type];//type['salad']//returns value for key salad
    //console.log(oldCount);
    if (oldCount<=0) {
      return;
    }
    const updatedCount = oldCount -1;

    const updatedIngredients = {
      ...this.state.ingredients
    } 


    updatedIngredients[type] = updatedCount;
    //console.log(updatedIngredients)

    const priceDeduction = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction ;

    this.setState({totalPrice : newPrice ,ingredients : updatedIngredients} )

    this.updatePurchaseState(updatedIngredients);
  
  }

  purchaseHandler = () =>{
    this.setState({purchasing : true});
  }

  purchaseCancelHandler = () =>{
    this.setState({purchasing : false});
  }

  purchaseContinueHandler = () =>{
    alert("You can continue!");
  }

    render() {

      const disabledInfo = {
        ...this.state.ingredients
      };
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key]<= 0//return true or false
        //salad:true
      }
      return (
          <Aux>
            <Modal show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
              <OrderSummary 
                            price= {this.state.totalPrice} 
                            ingredients = {this.state.ingredients} 
                            canceled = {this.purchaseCancelHandler} 
                            continue ={this.purchaseContinueHandler} 
                            
                            />
            </Modal>
            <Burger ingredients ={this.state.ingredients} />
            <BuildControls 
              ingredientsAdded    = {this.addIngredientHandeler}
              ingredientsRemoved  = {this.removeIngredientHandeler}
              ingredientsDisabled = {disabledInfo}
              price               = {this.state.totalPrice}
              purchasable         = {this.state.purchasable}
              orderd              = {this.purchaseHandler}
           />
          </Aux>
      )
    }
}

export default BurgerBuilder;
