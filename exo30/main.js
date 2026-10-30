function operate(a,b,callback){
    return callback(a,b);
}

function multiple(a,b){
    return a*b;
}

function division (a,b){
    return a/b;
}

console.log("multiple", operate(3,6,multiple));
console.log("multiple", operate(10,2,division));



