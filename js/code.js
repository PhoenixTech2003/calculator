
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clr');
const result = document.querySelector('.result-container')
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.btn-equals');
const backspace = document.querySelector('.backspace');
const display = document.querySelector('.expression-container');
let secondValue = '';
let operator = '';
let firstValue = '';


function addValues (firstValue,...values){
    return firstValue + values.reduce((total,value)=> total += value,0);
};

function subtractValues (firstValue,...values){

    return  values.reduce((total,value)=> total -= value,firstValue);
};

function multiplyValues (firstValue,...values){
    return  values.reduce((total,value)=> total *= value,firstValue);
};

function divideValues (firstValue,...values){
    return  values.reduce((total,value)=> total /= value,firstValue);
};

function operate (firstValue,operator,secondValue){
    if (operator === '+'){
        return addValues(firstValue,secondValue);
    }else if (operator === '-'){
        return subtractValues(firstValue,secondValue);
    }else if (operator === '*' || operator === 'x'){
        return multiplyValues(firstValue,secondValue);
    }else if (operator === '/'){
        return divideValues(firstValue,secondValue);
    }else{
        return 'INVALID OPERATOR';
    }
};
function setValue (val){
    numbers.forEach((number)=>{number.addEventListener('click',function(e){
        val += e.target.textContent;
        if(val.includes('.')){
            let  numberOfdots = val.split('.').length-1;
            if(numberOfdots >= 2){
                let dotIndex = val.lastIndexOf('.');
                val =val.slice(0,dotIndex);
            }
        }
        
        result.textContent = val ;
        
            
            
            
            
    })});

    
    
    
}
function setOperator (){
    operators.forEach((operate)=>{operate.addEventListener('click',function(e){
        if (result.textContent !== null){
            setValue(secondValue);
        }
        operator =  e.target.textContent;
        if(operator === '='){
            display.textContent = `${result.textContent}`
        }else{
            
            display.textContent = `${result.textContent} ${operator}`;
        }

    
        
        
    })});

    
}

function stringOperations(){
    let ops = ['+','/','-','x'];
    operators.forEach(test =>{
        test.addEventListener('click',()=>{
            ops.forEach((op)=>{
                if(display.textContent.includes(op)){
                   let index = display.textContent.indexOf(op);
                    let value = display.textContent.slice(0, index).trim();
                    display.textContent = `${value} ${operator} ${result.textContent}`
                    firstValue = operate(Number(value),operator,Number(result.textContent));
                    if(firstValue == 'Infinity'){
                        alert('Thou shall not divide by zero');
                        display.textContent = '';
                        result.textContent = 0;
                    }
                    else if (Math.floor(firstValue)=== firstValue){
                        result.textContent = firstValue;
                    }else{
                        
                        firstValue = Number(firstValue).toFixed(1);
                        result.textContent = firstValue;
                    
                    }
                }
            })
        })
    })
    
}


function clearScreen(){
    
    clear.addEventListener('click',()=>{
        window.location.reload();
    })
}



clearScreen();
setValue(firstValue);
stringOperations();
setOperator();


