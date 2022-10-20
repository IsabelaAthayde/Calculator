const keys = document.querySelector('#keys')
const display = document.querySelector('h1')
const upperDisplay = document.querySelector('span')
const btnNum = document.querySelectorAll('.numbers')
const simbols = document.querySelectorAll('.simbols')
const equalTo = document.getElementById('equalTo')
const reset = document.getElementById('reset')
const keyDot = document.querySelector('#dot')
let leftNum = [];
let rightNum = [];
let simb = "";
let lastNumber = "";
let lastSimb = "";

keys.addEventListener("click", (item) => {
    let clicked = item.target.innerHTML
    if (item.target.classList.contains('simbols')) {
        simb = clicked
    }

    
    if(clicked != equalTo) {
        if (item.target.classList.contains('numbers')) {
            
            if(simb != "") {
                rightNum.push(clicked)
                
            } else {
            leftNum.push(clicked) 
            
            }
            
        }
    }

    if(clicked == "0" && display.textContent == "0") {
        leftNum[0] = "0"
        leftNum[1] = "."
    }

    if(leftNum[0] == ".") {
        leftNum[0] = "0"
        leftNum[1] = "."
    }
    
    if(leftNum.includes(".") && simb === "") {
        keyDot.classList.add("disable")
    } else {
        keyDot.classList.remove("disable")
    }

    if(lastNumber != "" && simb != "") {
        leftNum = [];
        rightNum = [];
        leftNum.push(lastNumber)
        lastNumber = ""; 
    }

    
    let firstValue = leftNum.join('');
    let secondValue = rightNum.join('');
    
    
    
    
    if(simb !== "") {
        if(firstValue === "") {
            firstValue = "0"
        }
        upperDisplay.textContent = firstValue
        display.textContent = simb + secondValue
        
    } else {
        display.textContent = firstValue
    }

    

    if(clicked == "=") {
        if(lastNumber != "") {
            
            firstValue = lastNumber
            
            calculate(firstValue, lastSimb, secondValue)
            
         } else {
           calculate(firstValue, simb, secondValue)
        }
        
    } 
    
    function calculate(n1, operator, n2) {

        if(operator == "x") {
            var result = parseFloat(n1) * parseFloat(n2)
        } else if(operator == "+") {
            var result = parseFloat(n1) + parseFloat(n2)
        } else if(operator == "-") {
            var result = parseFloat(n1) - parseFloat(n2)
        } else if(operator == "/") {
            var result = parseFloat(n1) / parseFloat(n2)   
        }

        if (simb != "") {
            lastSimb = simb 
            if(firstValue == "0" || result == "0") {
                if(simb == "+") {
                    display.textContent = secondValue
                } else {
                    display.textContent = lastSimb + secondValue
                }
            
            }
        }
        lastNumber = result.toString()
        upperDisplay.textContent = ""
        display.textContent = result
        
        
        simb = ""
    } 
    
    if(clicked == "C") { 
         function reset() { 
                leftNum = [];
                rightNum = [];
                lastNumber = "";
                display.innerText = "0";
                simb = ""; 
                upperDisplay.innerText = "";
                lastSimb = "";
                keyDot.classList.remove("disable")
         }
        reset()
    }
    

     
})



