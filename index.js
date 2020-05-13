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
    // addition(5,5);
    // subtraction(5,5);
    // multiplication(5,5);
    // division(5,5);
    // operate(5,5,"/");
    
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
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=calculatorButtons.numbers[0]
    
    console.log("zero pressed")
    }
    
    
    
    let zero=document.querySelector(".zero");
    zero.addEventListener("click",function(){
    
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=calculatorButtons.numbers[0]
    
    console.log("zero pressed")
    });
    
    let one=document.querySelector(".one");
    one.addEventListener("click",function(){
    
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=1
    
    console.log("one pressed")
    });
    let two=document.querySelector(".two");
    two.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=2 
    console.log("three pressed")
    });
    
    let three=document.querySelector(".three");
    three.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=3 
    console.log("three pressed")
    });
    let four=document.querySelector(".four");
    four.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=4 
    console.log("four pressed")
    }); 
    
    let five=document.querySelector(".five");
    five.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=5 
    console.log("five pressed")
    }); 
    
    let six=document.querySelector(".six");
    six.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=6 
    console.log("six pressed")
    }); 
    
    let seven=document.querySelector(".seven");
    seven.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=7 
    console.log("seven pressed")
    }); 
    
    let eight=document.querySelector(".eight");
    eight.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=8 
    console.log("eight pressed")
    }); 
    
    let nine=document.querySelector(".nine");
    nine.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent=9
    console.log("nine pressed")
    }); 
    
    let add=document.querySelector(".addition");
    add.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent="+" 
    console.log("plus pressed")
    });
    
    let subtract=document.querySelector(".subtract");
    subtract.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent="-" 
    console.log("minus pressed")
    });
    
    let multiply=document.querySelector(".multiply");
    multiply.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent="*" 
    console.log("factor pressed")
    });
    
    let divide=document.querySelector(".division");
    divide.addEventListener("click",function(){
    let screenDisplay=document.querySelector(".screenDisplay")
    let textDisplay=document.createElement("h2")
    textDisplay.classList.add("textDisplay")
    screenDisplay.appendChild(textDisplay)
    textDisplay.textContent="/" 
    console.log("division pressed")
    });
    
    const clear = document.querySelector('.clear');
    clear.addEventListener("click",function() {
    location.reload();
    
    });