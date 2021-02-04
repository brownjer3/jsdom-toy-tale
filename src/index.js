let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch("http://localhost:3000/toys")
  .then(r => r.json())
  .then(json => renderToys(json))
})

function renderToys(toys) {
  let collectionDiv = document.getElementById('toy-collection')
  for (const toy of toys) {
    let toyDiv = document.createElement('div')
    toyDiv.class = "card"
    toyDiv.innerHTML = `
      <h2>${toy.name}</h2>
      <img src="${toy.image}">
      <p>${toy.likes}</p>
      <button class="like-btn">Like <3</button>
    `
    collectionDiv.appendChild(toyDiv)
  }
}
