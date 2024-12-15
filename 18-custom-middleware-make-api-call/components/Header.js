import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchProducts,
	fetchProductsError,
	updateAllProducts,
} from "../store/slices/productsSlice";
import {
	fetchCartItems,
	fetchCartItemsError,
	loadCartItems,
} from "../store/slices/cartSlice";

export default function Header() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({
			type: "api/make-call",
			payload: {
				path: "/products",
				onSuccess: updateAllProducts.type,
				onLoading: fetchProducts.type,
				onError: fetchProductsError.type,
			},
		});
		// dispatch(fetchProducts());
		// fetch("http://localhost:3000/products")
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 		dispatch(updateAllProducts(data));
		// 	})
		// 	.catch(() => {
		// 		dispatch(fetchProductsError());
		// 	});
		// dispatch(fetchCartItems());
		// fetch("http://localhost:3000/carts/5")
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		dispatch(loadCartItems(data));
		// 	})
		// 	.catch(() => {
		// 		dispatch(fetchCartItemsError());
		// 	});
	}, []);
	const cartItems = useSelector((state) => state.cartItems.list);
	return (
		<header>
			<div className="header-contents">
				<h1>
					<Link to="/">Shopee</Link>
				</h1>
				<Link className="cart-icon" to="/cart">
					<img src={CartIcon} alt="cart-icon" />
					<div className="cart-items-count">
						{cartItems.reduce(
							(accumulator, currentItem) => accumulator + currentItem.quantity,
							0,
						)}
					</div>
				</Link>
			</div>
		</header>
	);
}
