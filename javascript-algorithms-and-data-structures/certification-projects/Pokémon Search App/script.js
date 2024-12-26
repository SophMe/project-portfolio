// Access DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const pokemonNameElement = document.getElementById('pokemon-name');
const pokemonIdElement = document.getElementById('pokemon-id');
const weightElement = document.getElementById('weight');
const heightElement = document.getElementById('height');
const typesElement = document.getElementById('types');

const hpElement = document.getElementById('hp');
const attackElement = document.getElementById('attack');
const defenseElement = document.getElementById('defense');
const specialAttackElement = document.getElementById('special-attack');
const specialDefenseElement = document.getElementById('special-defense');
const speedElement = document.getElementById('speed');

let allPokemon = [];

const fetchPokemon = async (query) => {
  const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    const data = await response.json();
    console.log('Fetched Pokémon data:', data);
    displayPokemonData(data);
  } catch (error) {
    alert(error.message);
  }
};

const displayPokemonData = (pokemon) => {
  console.log('Displaying data for:', pokemon.name, pokemon.id);

  typesElement.textContent = '';

  pokemonNameElement.textContent = pokemon.name.toUpperCase();
  pokemonIdElement.textContent = pokemon.id;
  weightElement.textContent = pokemon.weight;
  heightElement.textContent = pokemon.height;
  
  pokemon.types.forEach(type => {
    const typeElement = document.createElement('div');
    typeElement.textContent = type.type.name.toUpperCase();
    typesElement.appendChild(typeElement);
  });

  const stats = {};
  pokemon.stats.forEach(stat => {
    stats[stat.stat.name] = stat.base_stat;
  });

  hpElement.textContent = stats.hp || 0;
  attackElement.textContent = stats.attack || 0;
  defenseElement.textContent = stats.defense || 0;
  specialAttackElement.textContent = stats['special-attack'] || 0;
  specialDefenseElement.textContent = stats['special-defense'] || 0;
  speedElement.textContent = stats.speed || 0;

  const spriteElement = document.getElementById('sprite');
  if (spriteElement) {
    spriteElement.remove();
  }
  const newSprite = document.createElement('img');
  newSprite.id = 'sprite';
  newSprite.src = pokemon.sprites.front_default;
  newSprite.alt = `${pokemon.name} sprite`;

  document.getElementById('pokemon-info').appendChild(newSprite);
};

const formatInput = (input) => {
  return input
    .toLowerCase()
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m')
    .replace(/\./g, '-')
    .trim();
};

searchButton.addEventListener('click', () => {
  const input = searchInput.value;
  console.log('Search button clicked. Input:', input);
  
  if (input) {
    const formattedInput = formatInput(input);
    fetchPokemon(formattedInput);
  } else {
    alert('Please enter a Pokémon name or ID.');
  }
});
