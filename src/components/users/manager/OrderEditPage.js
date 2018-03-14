import React, { PropTypes } from 'react';
import OrderForm from '../../common/OrderForm'; //eslint-disable-line import/no-named-as-default

export default class OrderEditPage extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.params.id ? 'Edit Order' : 'Add Order'}</h1>
                <OrderForm redirectDest="orders" orderId={this.props.params.id}/>
            </div>
        );
    }
}

OrderEditPage.propTypes = {
    params: PropTypes.object.isRequired
};