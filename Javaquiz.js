let quiz = document.querySelector( '.Quiz' )
let resultado = document.querySelector( '.resultado')
let image  = document.querySelector( 'Claudio2' )


function checkAnswer( event ) {


    quiz.classList.add( 'inactive' )
  

    let alternativa = event.target
  
    alternativa.classList.add( 'clicked' )
  
    if ( alternativa.classList.contains( 'correct' ) ) {
  
      resultado.textContent = 'Se você ama futebol e não conhece Cláudio, isso não é exatamente um problema. É que o maior artilheiro de um dos maiores clubes do Brasil se tornou famoso na década de 1950. Em 550 jogos, ele marcou 305 gols e levantou 8 taças'
  
      resultado.style.color = 'White'

      image.style.display = 'claudio.jpg'
  
    } else {
  
      resultado.textContent = 'Errou :('

      result.style.color = 'Red'
  
    }

    answer.style.display = 'initial'
  
  }
  

  let alternativas = document.querySelectorAll( 'li' )
  

  for ( let alternativa of alternativas ) {
  

    alternativa.addEventListener( 'click', checkAnswer )
  
  }
