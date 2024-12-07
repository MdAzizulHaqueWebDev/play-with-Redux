import { useDispatch } from "../react-redux";
import { addCartItem } from "../store/cartReducer";
import heartIcon from "../assets/heart.png";
import { addWishListItem } from "../store/wishListReducer";
export default function Product({ productId, title, rating, price, imageUrl }) {
	const dispatch = useDispatch();
	return (
		<div className="product">
			<img
				onClick={() => dispatch(addWishListItem(productId))}
				className="wish-btn"
				width={50}
				src={heartIcon}
			/>
			<div className="product-image">
				<img src={imageUrl} alt={title} />
			</div>
			<div className="title-container">
				<h3>
					<a href="#">{title}</a>
				</h3>
			</div>
			<div className="price-rating-container">
				<p className="rating">{+rating} ★ ★ ★ ★</p>
				<p className="price">${price}</p>
			</div>
			<div className="cta-container">
				<button
					onClick={() => {
						dispatch(
							addCartItem({ productId, title, rating, price, imageUrl }),
						);
					}}
				>
					Add to Cart
				</button>
				<button>Buy Now</button>
			</div>
		</div>
	);
}
