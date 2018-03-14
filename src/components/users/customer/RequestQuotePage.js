import React from 'react';
import OrderForm from '../../common/OrderForm'; //eslint-disable-line import/no-named-as-default

export default class RequestQuotePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Request A Quote</h1>
        <OrderForm buttonText="Submit" redirectDest="success"/>
      </div>
    );
  }
}
