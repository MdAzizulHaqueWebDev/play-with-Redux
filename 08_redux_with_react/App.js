import { useSelector } from "react-redux";
import Product from "./components/Product";

const App = () => {
	const products = useSelector((state) => state.products);
	return (
		<>
			<h1>Connect Redux with ReactJS App</h1>
			<div className="products-container">
				{products.map(({ id, title, rating, price, image }) => (
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
