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
import { fetchAPIAction } from "../store/middleware/API_Middleware";

export default function Header() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			fetchAPIAction({
				path: "/products",
				onSuccess: updateAllProducts.type,
				onLoading: fetchProducts.type,
				onError: fetchProductsError.type,
			}),
		);
		dispatch(
			fetchAPIAction({
				path: "/carts/23",
				onSuccess: loadCartItems.type,
				onLoading: fetchCartItems.type,
				onError: fetchCartItemsError.type,
			}),
		);
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
