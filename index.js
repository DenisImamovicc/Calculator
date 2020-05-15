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

    function operate(a,b,operator){
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
// addition(5,5);
// subtraction(5,5);
// multiplication(5,5);
// division(5,5);
operate(5,5,"/");

//Where all buttons should be connected to
let calculatorButtons = {
numbers:[0,1,2,3,4,5,6,7,8,9],
operators:["+","-","*","/"],
result:"="
};
//Where all of the selected button value goes to now[]
let currentDisplay = {now:[]};

console.log(calculatorButtons)

function inputDisplay(input){
let screenDisplay=document.querySelector(".screenDisplay")
let textDisplay=document.createElement("h2")

    if(input=="="){
        console.log(input+" "+"pressed")
        return;
    }
    else{
        textDisplay.classList.add("textDisplay")
        screenDisplay.appendChild(textDisplay)
        textDisplay.textContent=input
        console.log(input+" "+"pressed")
        console.log(input)
        console.log(textDisplay)


    }
}

let zero=document.querySelector(".zero");
zero.addEventListener("click",function(){
    inputDisplay(0)
});

let one=document.querySelector(".one");
one.addEventListener("click",function(){
    inputDisplay(1)
});
let two=document.querySelector(".two");
two.addEventListener("click",function(){
    inputDisplay(2)
});

let three=document.querySelector(".three");
three.addEventListener("click",function(){
    inputDisplay(3)
});
let four=document.querySelector(".four");
four.addEventListener("click",function(){
    inputDisplay(4)
}); 

let five=document.querySelector(".five");
five.addEventListener("click",function(){
    inputDisplay(5)
}); 

let six=document.querySelector(".six");
six.addEventListener("click",function(){
    inputDisplay(6)
}); 

let seven=document.querySelector(".seven");
seven.addEventListener("click",function(){
    inputDisplay(7)
}); 

let eight=document.querySelector(".eight");
eight.addEventListener("click",function(){
    inputDisplay(8)
}); 

let nine=document.querySelector(".nine");
nine.addEventListener("click",function(){
    inputDisplay(9)
}); 

let add=document.querySelector(".addition");
add.addEventListener("click",function(){
    inputDisplay("+")
});

let subtract=document.querySelector(".subtract");
subtract.addEventListener("click",function(){
    inputDisplay("-")
});

let multiply=document.querySelector(".multiply");
multiply.addEventListener("click",function(){
    inputDisplay("*")
});

let divide=document.querySelector(".division");
divide.addEventListener("click",function(){
    inputDisplay("/")
});

let equalsTO=document.querySelector(".operate");
equalsTO.addEventListener("click",function(){
    inputDisplay("=")
    //operate(a,b,operator)

    console.log(input)
});

let clear = document.querySelector('.clear');
clear.addEventListener("click",function() {
    location.reload();
});



