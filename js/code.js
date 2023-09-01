
const numbers = document.querySelectorAll('.number');
const result = document.querySelector('.result-container')
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.btn-equals')

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
        result.textContent = val ;
        
        
    })});
    
    
    
}
function setOperator (){
    operators.forEach((operate)=>{operate.addEventListener('click',function(e){
        if (result.textContent !== null){
            setValue(secondValue);
        }
        operator =  e.target.textContent;
        display.textContent = `${result.textContent} ${operator}`;
    
    })});
}

function calculateResult(){
    let ops = ['+','/','-','x'];
    operators.forEach(test =>{
        test.addEventListener('click',()=>{
            ops.forEach((op)=>{
                if(display.textContent.includes(op)){
                   let index = display.textContent.indexOf(op);
                    let value = display.textContent.slice(0, index).trim();
                    display.textContent = `${value} ${operator} ${result.textContent} =`
                    firstValue = operate(Number(value),operator,Number(result.textContent));
                    result.textContent = firstValue;
                }
            })
        })





    })
}

function stringOperations(){
    console.log(result.textContent);
    let ops = ['+','/','-','x'];
    operators.forEach((operator)=>{
        operator.addEventListener('click',function (e){
            ops.forEach((op)=>{
                
                if(display.textContent.includes(op)){
                    
                    let index = display.textContent.indexOf(op);
                    let value = display.textContent.slice(0, index).trim();
                    if(value === result.textContent){
                        setOperator()
                    }else{
                        let firstValue2 = operate(Number(value),operator.textContent,Number(result.textContent));
                        console.log(firstValue2);
                        display.textContent = `${value} ${operator.textContent} ${result.textContent} =`
                        result.textContent = firstValue2;
                        
                    }
                

                                    
                }
            })
        });
    });
};

calculateResult();
setValue(firstValue);
setOperator();
stringOperations();
