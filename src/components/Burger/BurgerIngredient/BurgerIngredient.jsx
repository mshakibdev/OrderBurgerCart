import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CssClasses from './BurgerIngredient.module.css';

class BurgerIngredient extends Component{

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case "bread-bottom":
                ingredient = <div className={CssClasses.BreadBottom}></div>
                break;

            case "bread-top":
                ingredient =(
                    <div className={CssClasses.BreadTop}>
                        <div className={CssClasses.Seeds1}></div>
                        <div className={CssClasses.Seeds1}></div>
                    </div>
                );
                break;

            case "meat":
                ingredient = <div className={CssClasses.Meat}></div>
                break;
            case "cheese":
                ingredient = <div className={CssClasses.Cheese}></div>
                break;
            case "bacon":
                ingredient = <div className={CssClasses.Bacon}></div>
                break;
                
            case "salad":
                ingredient = <div className={CssClasses.Salad}></div>
                break;
            default:
                ingredient = null;
                break;
        }

        return ingredient;
        }
}

BurgerIngredient.propTypes ={
    type: PropTypes.string.isRequired
}
export default BurgerIngredient;


