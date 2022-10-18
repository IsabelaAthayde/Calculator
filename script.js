const body = document.querySelector('body')
const display = document.querySelector('h1')
const upperDisplay = document.querySelector('span')
const btnNum = document.querySelectorAll('.numbers')
const simbols = document.querySelectorAll('.simbols')
const equalTo = document.getElementById('equalTo')
const reset = document.getElementById('reset')
let leftNum = [];
let rightNum = [];
let simb = "";

body.addEventListener("click", (item) => {
    let clicked = item.target.innerHTML
    
    if (item.target.classList.contains('simbols')) {
        simb = clicked
    }

    if (item.target.classList.contains('numbers')) {
        if(simb != "") {
            rightNum.push(clicked)
            
        } else {
           leftNum.push(clicked) 
           
        }
        
    }

    

     let firstValue = parseFloat(leftNum.join(''));
     let secondValue = parseFloat(rightNum.join(''));
    

    if(simb !== "") {
        upperDisplay.textContent = firstValue
        if(secondValue === NaN) {
            display.textContent = simb + 0
        } else {
            display.textContent = simb + secondValue
        }
        
    } else {
        display.textContent = firstValue
    }

     
     
     equalTo.addEventListener('click', function() {
       
        display.textContent = calculate(firstValue, simb, secondValue)
     }) 

     reset.addEventListener('click', function() {
        leftNum = [];
        rightNum = [];
        simb = ""; 
        display.textContent = "0";
        upperDisplay.textContent = "  ";
     })
})

function calculate(n1, operator, n2) {
    let result = 0;
    if(operator === "x") {
        result = n1 * n2
    } else if(operator === "+") {
        result = n1 + n2
    } else if(operator === "-") {
        result = n1 - n2
    } else if(operator === "/") {
        result = n1 / n2
    }
    
    return result
}
