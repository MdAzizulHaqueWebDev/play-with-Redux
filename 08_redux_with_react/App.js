import Product from "./components/Product";
import { store } from "./store";
import { productsList } from "./store/productsList";
console.log(store);
const App = () => {
	return (
		<>
			<h1>Connect Redux with ReactJS App</h1>
			<div className="products-container">
				{store
					.getState()
					.products.map(({ id, title, rating, price, image }) => (
						<Product
							key={id}
							title={title}
							rating={rating}
							price={price}
							imageUrl={image}
						/>
					))}
			</div>
		</>
	);
};

export default App;
