let height = document.getElementById("height");
let weight = document.getElementById("weight");
let button = document.getElementById("button");

let result = document.querySelector(".result");
let score = document.getElementById("score");

button.addEventListener('click', ()=>{
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    newHeight = newHeight / 100;
    let sqrHeight = newHeight * newHeight;

    let bmi = newWeight / sqrHeight;
    score.textContent = bmi.toFixed(2);
    result.style.display = 'block';

    if( score.textContent < 18.6){
        result.style.background = "red";
    }else if( score.textContent < 24.9){
        result.style.background = "rgb(73, 195, 103)";
    }else{
        result.style.background = "gray";
    }
});

let form = document.getElementById('form');
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    
});