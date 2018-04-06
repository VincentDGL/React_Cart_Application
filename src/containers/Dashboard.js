import React, { Component } from 'react';
import PropTypes, { number, object } from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts, addToCart, updateTotal } from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.addToCart = this.addToCart.bind(this);
  }

  static getBreadcrumb() {
    return <span className="current-page"></span>
  }

  addToCart(item) {
    if (this.props.cartListCount >= 99) {
      alert("Quantity Exceeds the limit of 99");
    }
    else {
      var list = this.props.cartList;
      var totalPrice = this.props.totalPrice + (item.price - item.discount);
      list.push(item);
      this.props.addToCart(list);
      this.props.updateTotal(totalPrice);
    }
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {

    return (
      <div className="adjust-padding" id="dashboard">
        <div className="heading"><span>Products</span></div>
        <div className="line"></div>
        {this.props.productList &&
          this.props.productList.map(function (item, i) {
            return <div className="product-item col-sm-3">
              <div className="item-img">
                <img src={item.imageUrl} />
              </div>
              <div className="item-desc">
                <span className="product-name">{item.productName}</span>
                <span className="product-price">{"Price: $ " + item.price}</span>
              </div>
              <div className="add-to-cart">
                <button type="button" onClick={() => { this.addToCart(item); }}>Add To Cart</button>
              </div>
            </div>
          }, this)
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  productList: PropTypes.array,
  addToCart: PropTypes.func,
  updateTotal: PropTypes.func,
  cartList: PropTypes.array,
  cartListCount: PropTypes.number,
  totalPrice: PropTypes.number
}

function mapStateToProps(state) {
  return {
    productList: state.products.productList,
    cartList: state.cart.cartList,
    cartListCount: state.cart.cartListCount,
    totalPrice: state.cart.totalPrice
  }
}

export default connect(mapStateToProps, {
  fetchProducts, addToCart, updateTotal
})(Dashboard)