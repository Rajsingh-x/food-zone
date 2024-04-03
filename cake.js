let cakeImages = document.getElementsByClassName('cake')
let rightBtns = document.getElementsByClassName('recipeDetail')


rightBtns[0].classList.add('clickEffect')
cakeImages[0].classList.add('animationClass')
cakeImages[0].classList.remove('forDisplay')


for(let i = 1; i <= 4; i++){
  let btn = document.getElementById(`btn${i}`).addEventListener("click", ()=>{
    for(let j = 0; j < 4; j++){
      cakeImages[j].classList.remove('animationClass')
      cakeImages[j].classList.add('forDisplay')
      rightBtns[j].classList.remove('clickEffect');
    }
    document.getElementById(`btn${i}`).classList.add('clickEffect')
    cakeImages[i - 1].classList.remove('forDisplay');
    cakeImages[i - 1].classList.add('animationClass');
  })
}

