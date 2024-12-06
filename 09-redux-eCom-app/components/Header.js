import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "react-redux";
import heartIcon from "../assets/heart.png";

export default function Header() {
	const { cartItems, wishList } = useSelector((state) => state);
	return (
		<header>
			<div className="header-contents">
				<h1>
					<Link to="/">Shopee</Link>
				</h1>
				<Link className="heart-icon" to="/wishlist">
					<img src={heartIcon} alt="heart-icon" />
					<div className="wishlist-items-count">{wishList.length}</div>
				</Link>
				<Link className="cart-icon" to="/cart">
					<img src={CartIcon} alt="cart-icon" />
					<div className="cart-items-count">
						{cartItems.reduce((acc, item) => acc + item.quantity, 0)}
					</div>
				</Link>
			</div>
		</header>
	);
}
