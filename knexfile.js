// Update with your config settings.
require("dotenv/config");

module.exports = {
	client: "postgresql",
	connection: {
		database: "knowledge",
		user: process.env.BD_USER,
		password: process.env.BD_PASSWORD,
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
	},
};
