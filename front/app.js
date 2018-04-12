const navbarHtml = `<nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
`
const footerHtml = `<footer>
    <div class="inner">&copy; 2018 Wild Movies Toulouse</div>
  </footer>
`

const homeHtml = `
  <!-- Content -->
  <h1>Home</h1>
  <div class="movies">
    <div class="movie-thumb">
      <a href="movie-matrix.html"><img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg" alt="The Matrix" /></a>
      <p>Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.</p>
    </div>
    <div class="movie-thumb">
      <a href="movie-inception.html"><img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" alt="Inception" /></a>
      <p>Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible.</p>
    </div>
  </div>
`

const aboutHtml = `
  <h1>About</h1>
  <div class="movie-page">
    <p>This is a site about movies.</p>
  </div>
`

const matrixHtml = `
  <h1>The Matrix</h1>
  <div class="movie-page">
    <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg" alt="The Matrix" />
    <p>Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.</p>
  </div>
`

const inceptionHtml = `
  <h1>Inception</h1>
  <div class="movie-page">
      <a href="movie-inception.html"><img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" alt="Inception" /></a>
      <p>Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible.</p>
  </div>
`

const mainDiv = document.getElementById('main')
mainDiv.innerHTML = navbarHtml + homeHtml + footerHtml

const allLinks =  document.getElementsByTagName('a')
console.dir(allLinks)
for(let link of allLinks) {
  link.addEventListener('click', event => {
    // Empêche le comportement par défaut du lien
    event.preventDefault()
    const newUrl = event.target.href
    // On découpe l'URL car on veut obtenir le "morceau"
    // se trouvant après le dernier /
    // split() sur une chaîne nous renvoie un tableau
    const splitUrl = newUrl.split('/')
    const page = splitUrl.pop()
    console.log(page)

    if(page === 'index.html') {
      mainDiv.innerHTML = navbarHtml + homeHtml + footerHtml
    }
    else if(page === 'about.html') {
      mainDiv.innerHTML = navbarHtml + aboutHtml + footerHtml 
    }
  })
}