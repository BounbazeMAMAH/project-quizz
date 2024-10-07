import { data } from "./data/data.js";
let index = 0;
const btNext = document.querySelector('.btnext');
const jsQuestionTitle = document.querySelector('.js-questiontitle');
const jsBtn = document.querySelectorAll('.js-btn');
const jsWitchone = document.querySelector('.js-whitchone');
let answer = '';
let score = 0;
let lost = 0;


function displayData(){
  if(index >= data.length){
    jsQuestionTitle.innerHTML = ''
    jsWitchone.innerHTML = `<h2 class="remarque">Fellicitation</h2>
        <p class="result">
          You're correct ${score} Times And You're wrong ${lost} Times
        </p>
        <p class="result">Your Score is: ${score * 2} points or ${(score/data.length *100).toFixed(2)} % success  </p>`
     btNext.innerHTML = 'Try Again';
     index++;
  }
 
  
  jsQuestionTitle.innerHTML = data[index].question
  jsBtn.forEach((button, i) => {
    button.innerHTML
     = data[index].ansxers[i].text;
    button.style.backgroundColor = "";
    button.style.color = "";
    button.style.fontWeight = "";
    btNext.style.display = "none";
    button.classList.remove('btn-disabled')
  });
 
  if(index === data.length - 1){
    btNext.innerHTML = 'Finish'
  }
}
function counteIndex(){

  if(index <= data.length - 1){
    index++;
  }
  
}

function quizzSystem() {

  jsBtn.forEach((button, i)=>{
    
    button.addEventListener('click',()=>{
       answer = data[index].ansxers[i].correct;
      jsBtn.forEach((check, y)=>{
        const response = data[index].ansxers[y].correct;
        if (response){
          check.style.backgroundColor = "green";
          check.style.color = "white";
          check.style.fontWeight = "bold";
          
        };
        
      })
      if(answer){
        button.style.backgroundColor = "green";
        button.style.color = "white";
        button.style.fontWeight = "bold";
        score++;
      }else{
        button.style.backgroundColor = "red";
        button.style.color = "white";
        button.style.fontWeight = "bold";
        lost++;
      }
      btNext.style.display = "block"
      jsBtn.forEach(btn => {
        btn.classList.add('btn-disabled'); // Ajouter la classe disabled à chaque bouton
      });
      console.log(answer)
    })
  })
  
}
btNext.addEventListener('click', ()=>{
  counteIndex();
  displayData()
  
})


quizzSystem()
displayData()


