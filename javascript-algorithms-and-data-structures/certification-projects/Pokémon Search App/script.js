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

const fetchPokemonList = () => {
  fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon')
    .then((res) => res.json())
    .then((data) => {
      allPokemon = data.results;
      console.log("All Pokémon:", allPokemon);
    })
    .catch((err) => console.error('Error fetching Pokémon list:', err));
};

const formatInput = (input) => {
  return input
    .toLowerCase()
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m')
    .replace(/\./g, '-')
    .trim();
};