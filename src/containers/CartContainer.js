import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import Price from "../components/Price";
import { updateTotal } from '../actions';

class CartContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.updateTotal = this.updateTotal.bind(this);
    }

    updateTotal(total) {
        var totalPrice = this.props.totalPrice + total;
        this.props.updateTotal(totalPrice);
    }

    static getBreadcrumb() {
        return <span className="current-page">Cart</span>
    }

    render() {
        const tax = ((this.props.totalPrice * 5) / 100);
        const total = this.props.totalPrice + tax;
        return (
            <div className="adjust-padding" id="dashboard">
                <div className="heading"><span>Shopping Cart</span></div>
                <div className="line"></div>
                {this.props.cartList &&
                    this.props.cartList.map(function (item, i) {
                        return <div>
                            <div className="cart-product">
                                <div className="product-img col-sm-2">
                                    <img src={item.imageUrl} />
                                </div>
                                <div className="product-desc col-sm-4">
                                    <span className="product-name">{item.productName}</span>
                                    <span className="product-desc">{item.productDesc}</span>
                                    <span className="product-date">{item.shoppingDate}</span>
                                </div>
                                <Price item={item} updateTotal={this.updateTotal}></Price>
                            </div>
                            <div className="line"></div>
                        </div>
                    }, this)
                }
                <div className="row total-price">
                    <div className="col-sm-9"></div>
                    <div className="product-price col-sm-3">
                        <div className="actual-price">
                            <span className="price-label">Sub Total: </span><span className="price-value">{"$ " + this.props.totalPrice}</span>
                        </div>
                        <div className="discount-price">
                            <span className="price-label">Tax:</span><span className="price-value">{"$ " + tax}</span>
                        </div>
                        <div className="line"></div>
                        <div className="">
                            <span className="price-label">Total: </span><span className="price-value">{"$ " + total}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CartContainer.propTypes = {
    productList: PropTypes.array,
    cartList: PropTypes.array,
    totalPrice: PropTypes.number
}

function mapStateToProps(state) {
    return {
        productList: state.products.productList,
        cartList: state.cart.cartList,
        totalPrice: state.cart.totalPrice
    }
}

export default connect(mapStateToProps, {
    updateTotal
})(CartContainer)