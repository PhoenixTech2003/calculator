function addValues (firstValue,...values){
    return firstValue + values.reduce((total,value)=> total += value,0);
};

