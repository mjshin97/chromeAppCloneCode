const calculator = {//+ - / * **

    plus : function(a, b){
        return a + b; //when return some value, function will be finish their job
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
