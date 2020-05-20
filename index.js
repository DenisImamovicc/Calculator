  
  
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

    function operate(numberone,numbertwo,operators){
        if(operators=="+"){
        sum=addition(numberone,numbertwo);

        }
        else if(operators=="-"){
        sum=subtraction(numberone,numbertwo);

        }
        else if(operators=="*"){
        sum=multiplication(numberone,numbertwo);

        }
        else if(operators=="/"){
        sum=division(numberone,numbertwo);
        }

    }
// addition(5,5);
// subtraction(5,5);
// multiplication(5,5);
// division(5,5);
// operate(5,5,"/");


const buttonNumbers= document.querySelectorAll("[data-number]")    
const buttonOperations= document.querySelectorAll("[data-operation]")    
const buttonAllClear= document.querySelector("[data-all-clear]")    
const buttonDelete= document.querySelector("[data-delete]")
const buttonEqual= document.querySelector("[data-equals]")    
const screenDisplay= document.querySelector("[data-current-operand]")  


function inputDisplay(input){

    if(input=="="){
        console.log(input+" "+"pressed")
        // textDisplay.textContent=operate(5,5,"/");
        return;
    }
    else{
        textDisplay.classList.add("textDisplay")
        screenDisplay.appendChild(textDisplay)
        textDisplay.textContent=input
        console.log(input+" "+"pressed")
        console.log(textDisplay)
        currentDisplay++
        console.log(currentDisplay)

    }
}
 
buttonNumbers.forEach(button => {
    button.addEventListener("click",() => {
        console.log(button)
        screenDisplay.textContent=button.innerHTML
    })
})

buttonOperations.forEach(button => {
    button.addEventListener("click",() => {
        console.log(button)
        screenDisplay.textContent=button.innerHTML
    })
})

let equalsTO=document.querySelector(".operate");
equalsTO.addEventListener("click",function(){
    inputDisplay("=")
    //operate(a,b,operator)
    // console.log(input)
});

buttonDelete.addEventListener("click",function(){
    inputDisplay("=")
    //operate(a,b,operator)
    // console.log(input)
});

buttonAllClear.addEventListener("click",function() {
    screenDisplay.textContent=location.reload();
         console.log("no work")

});



