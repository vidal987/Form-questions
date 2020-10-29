(function() {
  
    // início do JSON
    const myQuestions = [
      {
        question: "Qual o nome da substância que deixa o tomate vermelho?",
        answers: {
          a: "Ricopeno",
          b: "Licopeno",
          c: "Dicopeno",
          d: "Sicopeno"
        },
        correctAnswer: "b"
      },
      {
        question: "Quando foi a primeira aparição do Coringa?",
        answers: {
          a: "Março de 1970",
          b: "Janeiro de 1939",
          c: "Abril de 1940",
          d: "Julho de 1950"
        },
        correctAnswer: "c"
      },
      {
        question: "Na série Game of Thrones, qual é o nome da atriz da mãe dos dragões?",
        answers: {
          a: "Emilia Clarke",
          b: "Carice Van Houten",
          c: "Lena Headey",
          d: "Gwendoline Christie"
        },
        correctAnswer: "a"
      },
      {
        question: "O brasil faz fronteira com: ",
        answers: {
          a: "7 Países",
          b: "5 Países",
          c: "9 Países",
          d: "10 Países"
        },
        correctAnswer: "d"
      }
    ]; //fim do JSON
  
    function buildQuiz() {
      // precisaremos de um local para armazenar a saída HTML
      const output = [];
  
      // Percorre cada pergunta...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // queremos armazenar a lista de opções de resposta
        const answers = [];
  
        // e para cada resposta disponível...
        for (letter in currentQuestion.answers) {
          // ...adiciona um radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // adiciona as questões e suas respostas na saída
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finalmente combinamos nossa lista de saída em uma string de HTML e colocamos na página
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // reune recipientes de respostas do nosso questionário
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // acompanha as respostas do usuário
      let numCorrect = 0;
  
      // para cada pergunta...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // encontra a resposta selecionada
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // Se a resposta está correta
        if (userAnswer === currentQuestion.correctAnswer) {
          // Conta o número de respostas corretas
          numCorrect++;
  
          // colore as respostas com verde
          answerContainers[questionNumber].style.color = "green";
        } else {
          // se a resposta estiver errada ou vazia
          // colore as respostas com vermelho
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // mostra o número de respostas corretas no total
      totalContainer.innerHTML = `Acertou ${numCorrect} de ${myQuestions.length}`;
      
      // testa se o usuário acertou a metade das questões, se sim
      //podemos usar o ajax e enviar o resultado para o php e então enviar o e-mail
      (numCorrect >=2) ?  resultsContainer.innerHTML = "Passou no teste, chamar o ajax e enviar ao php no email" : resultsContainer.innerHTML = "Não passou no teste" ;
      
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const totalContainer = document.getElementById("total");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // Chama o quiz.
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // quando enviar, mostrará o resultado.
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();