import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes, { object, number } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
	constructor(props) {
		super(props);

		//function bindings
		//set initial state
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		this.state = {

		};
	}

	show(e) {
		this.setState({ drpDwnVisible: true });
		document.addEventListener("click", this.hide);
	}

	hide() {
		this.setState({ drpDwnVisible: false });
		document.removeEventListener("click", this.hide);
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.cartList.length)
	}

	render() {
		return (
			<div className="header-wrapper">
				<header className="navbar navbar-default">
					<div className="logo col-sm-3">John Doe Enterprise</div>
					<div className="search-panel col-sm-6">
						<div className="col-sm-9">
							<input type='search-input' className='form-control' />
						</div>
						<div className="col-sm-3">
							<div className="search-container">
								<a>
									<i className="searchIcon glyphicon glyphicon-search"></i>
									<span>Search</span>
								</a>
							</div>
						</div>
					</div>
					<div className="mini-cart col-sm-3">
						<Link to='/cart' className="cart-link">
							<a className="cart-icon">
								<i className="glyphicon glyphicon-shopping-cart"></i>
								<span>{"Cart " + this.props.cartListCount + " Items"}</span>
							</a>
						</Link>
					</div>
					<div className="sub-nav">
						<div className="wrapper">
							<ul className="nav navbar-nav navbar-right">
								<li>

								</li>
							</ul>
						</div>
					</div>
				</header>

			</div>
		)
	}
}

Header.propTypes = {
	cartListCount: PropTypes.number
}

function mapStateToProps(state) {
	return {
		cartListCount: state.cart.cartListCount
	}
}

export default connect(mapStateToProps, {

})(Header)