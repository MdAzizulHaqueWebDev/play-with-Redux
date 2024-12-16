import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/slices/productsSlice";
import { fetchCartsThunk } from "../store/slices/cartSlice";
// import { fetchCarts } from "../store/slices/cartSlice";

export default function Header() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllProducts());
		dispatch(fetchCartsThunk());
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
