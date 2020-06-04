const app = require("express")();
const consign = require("consign");

consign()
	.then("./config/middlewares.js")
	.then("./api")
	.then("./config/routes.js")
	.into(app);

const server = app.listen(3000, () => {
	console.log("Server ruinning in port: " + server.address().port);
});
