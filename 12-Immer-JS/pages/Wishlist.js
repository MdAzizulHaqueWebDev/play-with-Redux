import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import WishlistItem from "../components/WishlistItem";

const Wishlist = () => {
	const { wishList: wishListIds, products } = useSelector((state) => state);
	const wishListItems = products.filter((product) =>
		wishListIds.some((item) => item.productId === product.id),
	);
	return (
		<div className="cart-container">
			<h2>Items in Your wishlist</h2>
			<div className="cart-items-container">
				<div className="cart-header cart-item-container">
					<div className="cart-item">Item</div>
					<div className="item-price">Price</div>
				</div>
				{wishListItems.map(({ id, title, rating, price, image }) => (
					<WishlistItem
						key={id}
						productId={id}
						title={title}
						price={price}
						imageUrl={image}
						rating={rating}
					/>
				))}
				<div className="cart-header cart-item-container">
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Wishlist;
