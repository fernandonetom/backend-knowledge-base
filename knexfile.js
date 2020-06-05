// Update with your config settings.
require("dotenv/config");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = process.env.PRODUCTION;

module.exports = {
	client: "postgresql",
	connection: {
		host: process.env.BD_HOST,
		database: process.env.BD_DATABASE,
		user: process.env.BD_USER,
		password: process.env.BD_PASSWORD,
		ssl: true,
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
	},
};
