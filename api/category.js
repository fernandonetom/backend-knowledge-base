module.exports = (app) => {
	const { existsOrError, notExistsOrError } = app.api.validation;
	const save = (req, res) => {
		const category = { ...req.body };
		if (req.params.id) category.id = req.params.id;
	};
};
