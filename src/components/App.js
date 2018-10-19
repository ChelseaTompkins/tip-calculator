import React, { Component } from 'react';
import BillItem from './BillItem';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bill: 0,
      tip: 0,
      total: 0
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let bill = parseFloat(this.state.bill);
    let tip = parseFloat(this.state.tip);
    let calcTip = bill * tip;
    let total = bill + calcTip;

    this.setState({
      tip: calcTip,
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
        <h2 className="heading">Bill calculator</h2>
        <BillItem 
          bill={this.state.bill} 
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
