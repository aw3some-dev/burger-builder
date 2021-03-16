import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    };

    render() {
        return (
            <Aux>
                {/* <div>Burger</div> */}
                {/* <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div> */}

                <div>Burger ingredients</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
