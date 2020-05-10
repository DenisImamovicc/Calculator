
function addition(a,b){
    sum=a+b;
    console.log(sum);

}

function subtraction(a,b){
    sum=a-b;
    console.log(sum);

}

function multiplication(a,b){
    sum=a*b;
    console.log(sum);

}

function division(a,b){
    sum=a/b;
    console.log(sum);

}
function operate(a,b,operator,sum){
    if(operator=="+"){
        sum=addition(a,b);

    }
    else if(operator=="-"){
        sum=subtraction(a,b);

    }
    else if(operator=="*"){
        sum=multiplication(a,b);

    }
    else if(operator=="/"){
        sum=division(a,b);
    }
}



addition(5,5);
subtraction(5,5);
multiplication(5,5);
division(5,5);
operate(5,5,"/");
