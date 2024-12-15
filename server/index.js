const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const { productsList } = require("./productsList");
// Middleware to parse JSON
app.use(express.json());
app.use(cors());

app.post("/save-data", (req, res) => {
	const inputData = req.body;
	// Create a unique filename using the current timestamp
	const randomId = crypto.randomUUID();
	const filename = `data_${inputData.name + randomId}.json`;

	// Write data to a new file
	fs.writeFile(filename, JSON.stringify(inputData, null, 2), (err) => {
		if (err) {
			console.error(err);
			return res.status(500).send("Error saving data");
		}
		res
			.status(200)
			.send({ message: `Data saved successfully to ${filename}!` });
	});
});
app.get("/", (req, res) => {
	res.send("server is running");
});
app.get("/products", (req, res) => {
	res.send(productsList);
});
app.get("/carts/:5", (req, res) => {
	const cartItems = {
		products: [
			{
				productId: 5,
				quantity: 1,
			},
		],
	};
	res.send(cartItems);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
