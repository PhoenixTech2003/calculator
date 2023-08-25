let firstValue;
let operator;
let secondValue;

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

function updateExpressionDisplay(){
    let displayArray = new Array(3);
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.addEventListener("click",function(e){
    const expressionContainer = document.querySelector('.expression-container');
    displayArray.push(e.target.innerHTML);
    formattedDisplay = displayArray.toString();
    formattedDisplay = formattedDisplay.replace(/,/g,'');
    expressionContainer.textContent = formattedDisplay;
    formatStringToOperate(formattedDisplay);   
    })
        
    );
};

// function formatStringToOperate(array):
function formatStringToOperate(string){
    //create array for expression
    let expressionArray = [];
    //create array for operators
    const operatorArray = ['+','-','/','x'];
    //forEach operator:
    operatorArray.forEach((operator)=>{
        //if operatorArray includes operator:
        if (string.includes(operator)){
            //store index of operator
            let operatorValue = operator;
            let operatorindex = string.indexOf(operator); 
            //firstvalue = slice from index 0 to operatorindex
            let firstValue = string.slice(0,operatorindex);
            //secondvalue = slice from operatorindex to end
            let secondValue = string.slice(operatorindex + 1 );
            let result = operate(Number(firstValue),operatorValue,Number(secondValue));
            const equals = document.querySelector('.btn-equals');
            equals.addEventListener('click',()=>{
                const resultContainer = document.querySelector('.result-container');
                resultContainer.textContent = result;
            });
        }   
        

    })
            //push firstvalue,operator, secondvalue to expressionArray 
    //return expression array


}

//function displayResult(expression):
    //query result-container
    //call operate function and pass in expression array values
    //update textContent of result-container
updateExpressionDisplay();


