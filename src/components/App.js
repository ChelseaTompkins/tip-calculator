import React, { Component } from 'react';
import BillItem from './BillItem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bill: 0,
      tax: .086,
      tip: 0,
      total: 0
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let bill = parseFloat(this.state.bill);
    let tip = parseFloat(this.state.tip);
    let tax = parseFloat(this.state.tax); 
    let calcTip = bill * (tip * 0.01);
    let calcTax = bill * tax;
    let total = bill + calcTip + calcTax;

    this.setState({
      // tip: calcTip,
      total: total
    })
  }

  updateBill = (bill) => {
    this.setState({
      bill: bill
    })
  }

  updateTip = (tip) =>{
    this.setState({
      tip: tip
    })
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-info">Calculate Your Bill</h1>
            <p className="lead">Bill calculator at your service!</p>
          </div>
        </div>
        <BillItem 
          bill={this.state.bill} 
          tax={this.state.tax}
          tip={this.state.tip}
          total={this.state.total} 
          updateBill={this.updateBill} 
          updateTip={this.updateTip}
          handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
