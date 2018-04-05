import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import Price from "../components/Price";

class CartContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static getBreadcrumb() {
        return <span className="current-page">Cart</span>
    }

    render() {
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
                                <Price item={item}></Price>
                            </div>
                            <div className="line"></div>
                        </div>
                    }, this)
                }
            </div>
        );
    }
}

CartContainer.propTypes = {
    productList: PropTypes.array,
    cartList: PropTypes.array
}

function mapStateToProps(state) {
    return {
        productList: state.products.productList,
        cartList: state.cart.cartList
    }
}

export default connect(mapStateToProps, {

})(CartContainer)