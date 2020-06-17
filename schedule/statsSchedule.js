const schedule = require("node-schedule");
const moment = require("moment");

module.exports = (app) => {
	const dateNow = moment.tz("America/Sao_Paulo").format();

	schedule.scheduleJob("*/1 * * * *", async () => {
		const usersCount = await app
			.db("users")
			.count("id")
			.whereNull("deletedAt")
			.first();
		const categoriesCount = await app.db("categories").count("id").first();
		const articlesCount = await app.db("articles").count("id").first();

		const { Stat } = app.api.stat;

		const lastStat = await Stat.findOne({}, {}, { sort: { createdAt: -1 } });

		const stat = new Stat({
			users: usersCount.count,
			categories: categoriesCount.count,
			articlesCount: articlesCount.count,
			createdAt: dateNow,
		});
		console.log(stat);
		const changeUsers = !lastStat || stat.users !== lastStat.users;
		const changeCategories =
			!lastStat || stat.categories !== lastStat.categories;
		const changeArticles = !lastStat || stat.articles !== lastStat.articles;

		if (changeUsers || changeCategories || changeArticles) {
			stat
				.save()
				.then(() =>
					console.log("[Stats] Estatisticas atualizadas em: " + dateNow)
				);
		}
	});
};
