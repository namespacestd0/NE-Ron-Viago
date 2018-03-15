import React from 'react';
import OrderForm from '../../common/OrderForm'; //eslint-disable-line import/no-named-as-default

export default class RequestQuotePage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Request A Quote</h1>
        <OrderForm buttonText="Submit Now" redirectDest="success" />
      </div>
    );
  }
}

const styles = {
  container:
    {
      minWidth: '350px',
      maxWidth: '550px',
      margin: "auto"
    },
  header: {
    textAlign: "center"
  }
};
