let quiz = document.querySelector( '.Quiz' )
let resultado = document.querySelector( '.resultado')
let image  = document.querySelector( 'Claudio2' )


function checkAnswer( event ) {


    quiz.classList.add( 'inactive' )
  

    let alternativa = event.target
  
    alternativa.classList.add( 'clicked' )
  
    if ( alternativa.classList.contains( 'correct' ) ) {
  
      // Troca o texto do resultado por “Acertou :)”
      resultado.textContent = 'Se você ama futebol e não conhece Cláudio, isso não é exatamente um problema. É que o maior artilheiro de um dos maiores clubes do Brasil se tornou famoso na década de 1950. Em 550 jogos, ele marcou 305 gols e levantou 8 taças'
  
      // Aplica cor de “acertou”
      resultado.style.color = 'White'
  
      // Mostra gatinho
      image.style.display = 'claudio.jpg'
  
    } else {
  
 
      resultado.textContent = 'Errou :('
  
      // Aplica cor de “errou”
      result.style.color = 'DeepPink'
  
    }
  
    // Mostra .answer
    answer.style.display = 'initial'
  
  }
  
  // Seleciona todas as <li>
  let alternativas = document.querySelectorAll( 'li' )
  
  // Para cada <li>
  for ( let alternativa of alternativas ) {
  
    // Ouve o evento de click e roda a função
    alternativa.addEventListener( 'click', checkAnswer )
  
  }
