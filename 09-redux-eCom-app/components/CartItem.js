import {
	decreaseCartItemQuantity,
	increaseCartItemQuantity,
} from "../store/cartReducer";
import { useDispatch } from "react-redux";

export default function CartItem({
	productId,
	title,
	rating,
	price,
	imageUrl,
	quantity,
}) {
	const dispatch = useDispatch();
	console.log(productId);
	return (
		<div className="cart-item-container">
			<div className="cart-item">
				<img src={imageUrl} alt={title} />
				<div>
					<h3>{title}</h3>
					<p>{rating} ★ ★ ★ ★</p>
				</div>
			</div>
			<div className="item-price">${price}</div>
			<div className="item-quantity">
				<button
					onClick={() => {
						if (quantity <= 1) {
							if (confirm(`Are You Sure Remove this: ${title}`)) return;
						}
						dispatch(decreaseCartItemQuantity(productId));
					}}
				>
					-
				</button>
				<span>{quantity}</span>
				<button onClick={() => dispatch(increaseCartItemQuantity(productId))}>
					+
				</button>
			</div>
			<div className="item-total">${quantity * price}</div>
		</div>
	);
}
