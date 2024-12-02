const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    let authorDataArr = data;
    // console.log("Author Data Array:", authorDataArr); 
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });

const displayAuthors = (authors) => {
  authors.forEach(({author, image, url, bio}, index) => {
    authorContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="author-name">${author}</h2>
        <img src="${image}" class="user-img" alt="${author} avatar">
        <p class="bio">${bio}</p>
        <a href="${url}" class="author-link" target="_blank">${author}'s author page</a>
      </div>`;
  });
};