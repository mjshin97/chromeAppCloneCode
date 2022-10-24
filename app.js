const calculator = {//+ - / * **
    add : function(a, b){
        console.log(a, b);
    },

    plus : function(a, b){
        console.log(a + b);
    },

    minus : function(a, b){
        console.log(a - b);
    },

    devide : function(a, b){
        console.log(a / b);
    },

    multiple : function(a, b){
        console.log(a * b);
    },

    powerOf : function(a, b){
        console.log(a ** b);
    }
};

calculator.add(5, 1);
calculator.plus(5, 1);
calculator.minus(6, 2);
calculator.devide(6, 2);
calculator.multiple(6, 2);
calculator.powerOf(6, 2);
console.log()