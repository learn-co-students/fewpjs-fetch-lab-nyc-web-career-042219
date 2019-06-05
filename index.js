function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
  const baba = document.createElement('h2')
  baba.innerHTML = `<h2>${json[4].name}!!!</h2>`

  const gaga = document.createElement('h2')
  gaga.innerHTML = `<h2>${json[4].name}!!!</h2>`
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
