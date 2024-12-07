import { useDispatch } from "../react-redux";

export default function WishlistItem({
	productId,
	title,
	rating,
	price,
	imageUrl,
}) {
	const dispatch = useDispatch();
	console.log(productId, title, rating, price, imageUrl);
	return (
		<div className="cart-item-container">
			<div className="cart-item">
				<img src={imageUrl} alt={title} />
				<div>
					<h3>{title}</h3>
					<p>{rating.rate} ★ ★ ★ ★</p>
				</div>
			</div>
			<div className="item-price">${price}</div>
			<div className="item-quantity"></div>
		</div>
	);
}
