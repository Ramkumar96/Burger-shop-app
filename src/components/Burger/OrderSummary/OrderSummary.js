import React, {Component} from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

//126
class OrderSummary extends Component{

  
    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize' }}>{igKey}</span>:{this.props.ingredients[igKey]}
                </li>);
        })
    
        return(

            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price} </strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchasecancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchasecontinued}>CONTINUE</Button>
            </Aux>

        )
    }
}

export default OrderSummary;