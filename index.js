const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

app.db = db;

consign()
	.then("./config/middlewares.js")
	.then("./api")
	.then("./config/ro utes.js")
	.into(app);

const server = app.listen(3000, () => {
	console.log("Server ruinning in port: " + server.address().port);
});
