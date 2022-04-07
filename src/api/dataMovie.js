fetch(
	'https://data-imdb1.p.rapidapi.com/titles/search/keyword/%7Bkeyword%7D?info=mini_info&limit=10&page=1&titleType=movie',
	{
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
			'x-rapidapi-key':
				'bd2ca43567msh0803e954f3df290p1c1dcajsne8e085bfe707',
		},
	}
)
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.error(err);
	});
