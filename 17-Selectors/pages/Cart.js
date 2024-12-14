import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../store/slices/cartReducer";

export default function Cart() {
	const cartItems = useSelector(selectCartItems);
	// problem : we can't get quantity and others props when use added carts
	// const carts = products.filter((product) =>
	// 	cartItems.some((item) => item.productId === product.id),
	// );
	// console.log(carts);

	return (
		<div className="cart-container">
			<h2>Items in Your Cart</h2>
			<div className="cart-items-container">
				<div className="cart-header cart-item-container">
					<div className="cart-item">Item</div>
					<div className="item-price">Price</div>
					<div className="quantity">Quantity</div>
					<div className="total">Total</div>
				</div>
				{cartItems.map(
					({ productId, title, rating, price, imageUrl, quantity }) => (
						<CartItem
							key={productId}
							productId={productId}
							title={title}
							price={price}
							quantity={quantity}
							imageUrl={imageUrl}
							rating={rating}
						/>
					),
				)}
				<div className="cart-header cart-item-container">
					<div></div>
					<div></div>
					<div></div>
					<div className="total">
						$
						{cartItems.reduce(
							(acc, item) => acc + item.price * item.quantity,
							0,
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
