import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";


class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...};
    // }

    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 2,
            bacon: 1
        }
    };

    render() {
        return (
            <Aux>
                {/* <div>Burger</div> */}
                {/* <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div> */}

                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
