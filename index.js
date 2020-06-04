const server = require("express")();

const app = server.listen(3000, () => {
	console.log("Server ruinning in port: " + app.address().port);
});
