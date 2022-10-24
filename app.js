const calculator = {//+ - / * **

    plus : function(a, b){
    return a + b;
    },
    
    minus : function(a, b){
    return a - b;
    },
    
    multiple : function(a, b){
    return a * b;
    },
    
    devide : function(a, b){
    return a / b;
    },
    
    powerOf : function(a, b){
    return a ** b;
    }
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multipleResult = calculator.multiple(10,minusResult);
const devideResult = calculator.devide(multipleResult, plusResult);
const powerOfResult = calculator.powerOf(devideResult, minusResult);