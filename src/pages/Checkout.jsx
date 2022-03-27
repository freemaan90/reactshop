import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';

const Checkout = () => {
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span></span>
							<span></span>
						</p>
						<p></p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
	);
}

export default Checkout;