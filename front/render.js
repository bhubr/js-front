// La div où je veux afficher
const mainDiv = document.getElementById('main')

// Simple fonction pour mettre le contenu passé en
// paramètre dans la div principale
const render = mainHtml => {
  mainDiv.innerHTML = mainHtml
}

module.exports = render
