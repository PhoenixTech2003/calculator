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



