import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

//126
const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return (<li key={igKey}>
                <span style={{textTransform: 'capitalize' }}>{igKey}</span>:{props.ingredients[igKey]}
            </li>);
    })


    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price} </strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchasecancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchasecontinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;