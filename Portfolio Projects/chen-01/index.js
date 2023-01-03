const SUPERHERO_TOKEN = '439557985057032';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const newHeroButton = document.getElementById('newHeroButton');
const heroImageDiv = document.getElementById('heroImage');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

const randomHero = () => {
	const numberOfHeroes = 731;
	return Math.floor(Math.random() * numberOfHeroes) + 1;
};

const statToEmoji = {
	intelligence: '🧠',
	strength: '💪',
	speed: '⚡',
	durability: '🏋️‍♂️',
	power: '📊',
	combat: '⚔️',
};

const showHeroInfo = (character) => {
	const name = `<h2>${character.name}</h2>`;
	const img = `<img src="${character.image.url}" height=200 width=200/>`;
	const stats = Object.keys(character.powerstats)
		.map((stat) => {
			return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${
				character.powerstats[stat]
			}</p>`;
		})
		.join('');

	heroImageDiv.innerHTML = `${name}${img}${stats}`;
};

const getRandomHero = (id) => {
	// id: 👉 base_url/id
	// json.image.url
	fetch(`${BASE_URL}/${id}`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			console.log(json.powerstats);
			const heroInfo1 = json;
			showHeroInfo(heroInfo1);
		});
};

const searchHero = (name) => {
	// name 👉 base_url/search/batman
	// json.results[0].image.url
	console.log(searchInput.value);

	fetch(`${BASE_URL}/search/${name}`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			const heroInfo2 = json.results[0];
			showHeroInfo(heroInfo2);
		});
};

newHeroButton.onclick = () => getRandomHero(randomHero());

searchButton.onclick = () => searchHero(searchInput.value);