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
    }else if (operator === '*'){
        return multiplyValues(firstValue,secondValue);
    }else if (operator === '/'){
        return divideValues(firstValue,secondValue);
    }else{
        return 'INVALID OPERATOR';
    }
};

function updateExpressionDisplay(){
    buttons = document.querySelectorAll('.number');
    buttons.forEach(button => button.addEventListener("click",function(e){
        console.log(e.target.innerHTML);
    })
        
    );
};

updateExpressionDisplay();


