import React, { Component } from 'react';

export default class Price extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            price: 1,
            discount: 1,
            totalPrice: 10
        }
        this.qtyChange = this.qtyChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            price: this.props.item.price,
            discount: this.props.item.discount,
            totalPrice: this.props.item.price - this.props.item.discount
        })
    }

    qtyChange(item, e) {
        var price = item.price * parseInt(e.target.value);
        var discount = item.discount * parseInt(e.target.value);
        this.setState({
            price: price,
            discount: discount,
            quantity: parseInt(e.target.value),
            totalPrice: price - discount
        })
    }

    render() {
        return (
            <div className="price-section col-sm-6">
                <div className="product-qty col-sm-6">
                    <label className="">Quantity</label>
                    <input type='number' className='form-control' onChange={(event) => { this.qtyChange(this.props.item, event); }} value={this.state.quantity} />
                </div>
                <div className="product-price col-sm-6">
                    <div className="actual-price">
                        <span className="price-label">Price: </span><span className="price-value">{"$ " + this.state.price}</span>
                    </div>
                    <div className="discount-price">
                        <span className="price-label">Discount:</span><span className="price-value">{"$ " + this.state.discount}</span>
                    </div>
                    <div className="line"></div>
                    <div className="total-price">
                        <span className="price-label">Total Price: </span><span className="price-value">{"$ " + this.state.totalPrice}</span>
                    </div>
                </div>
            </div>
        );
    }
}
