import React from "react";

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingrKey => {
        return (
            <li key={ingrKey}>
                <span style={{ textTransform: 'capitalize' }}>{ ingrKey }</span>: { props.ingredients[ingrKey] }
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                { ingredientSummary }
            </ul>

            <b>Total Price: { props.totalPrice.toFixed(2) }</b>

            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                Cancel
            </Button>

            <Button btnType="Success" clicked={props.purchaseContinued}>
                Continue
            </Button>
        </Aux>
    );
};

export default orderSummary;