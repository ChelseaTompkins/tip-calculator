import React, { Component } from 'react';

class BillItem extends Component {
    render(){
        return(
            <div className="container">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <span>Bill ($):</span>
                        <input 
                            className="form-control"
                            type="number" 
                            value={this.props.bill} 
                            onChange={(event)=>this.props.updateBill(event.target.value)}
                            placeholder= {this.props.bill}/>
                    </div>
                    <div className="form-group">
                        <span>Tip (%): </span>
                        <input 
                            className="form-control"
                            type="number" 
                            value={this.props.tip} 
                            onChange={(event)=>this.props.updateTip(event.target.value)}
                            placeholder={this.props.tip}/>
                    </div>
                    <div>
                        <p>Tax: {this.props.tax / 0.01}%</p>
                    </div>
                    <button className="btn btn-info" type="submit">Caculate total</button>
                </form>
                <h5 className="total">Your total: ${this.props.total.toFixed(2)}</h5>
            </div>
        )
    }
}

export default BillItem;