require("dotenv/config");
const mongoose = require("mongoose");
const mongoUser = process.env.mongoUser;
const mongoPass = process.env.mongoPass;
const mongoBase = process.env.mongoBase;
mongoose
	.connect(
		"mongodb+srv://" +
			mongoUser +
			":" +
			mongoPass +
			"@cluster0-5nujw.gcp.mongodb.net/" +
			mongoBase +
			"?retryWrites=true&w=majority",
		{ useNewUrlParser: true }
	)
	.catch((e) => {
		console.log("erro de conexão");
	});
