let fun = '';
let input1 = '';
let input2 = '';

const digits = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operators"); 
const equals = document.querySelector("#equals");
const clear = document.querySelector("#cl");
const allClear = document.querySelector("#ac");
//const dot = document.querySelector('#.');

digits.forEach(digit => {
digit.addEventListener("click", digitBtnLogic);
});

operators.forEach(operator => {
operator.addEventListener("click", operatorBtnLogic);
});

equals.addEventListener("click", equalTo);

clear.addEventListener("click", backSpaceLogic);

allClear.addEventListener("click", () => {input1=''; input2=''; fun=''; displayInput(input1)});

dot.addEventListener("click", dotLogic);

document.addEventListener("keydown", backSpaceLogic);

function digitBtnLogic(event){
    console.log(input1);
    console.log(input2);
    if(fun==''){
        if(input1.length<12){
        input1 = input1 + (event.target.id);
        displayInput(input1);
        }
    }
    else{
        if(input2.length<12){
        input2 = input2 + (event.target.id);
        displayInput(input2);
        }
    }
    
    //console.log(fun);
    //display.textContent=`${input1}`;
}

function backSpaceLogic(event){
    if(event.key === 'Backspace' || event.type=="click"){
     if(fun==''){
        //console.log(input1.length);      
        if(input1.length==2){
            if(input1.includes('-')){
                input1='';
            }
            else{
                input1=input1.slice(0,-1); 
            }
        }
        else{
            input1=input1.slice(0,-1); 
        }
        displayInput(input1);
    }
    else{
        input2=input2.slice(0,-1); 
        displayInput(input2);
    }
}

    if (input1 == ''){
        input1=''; input2=''; fun=''; displayInput(input1)
    }
        
}

function operatorBtnLogic(event){
    console.log(event.target.id);
    if(input1==''){
        input1 = '';  fun=''; input2='';
        displayInput(input1);
        return;
    }
    if(event.target.id === 'add'){
        console.log("Hey");
        fun = 'add';
    }
    else if(event.target.id === 'sub'){
        fun = 'sub';
    }
    else if(event.target.id == 'mul'){
        fun = 'mul';
    }
    else if(event.target.id == 'div'){
        fun = 'div';
    }
}

function equalTo(event){
    let result;

    if(input2==''|| input1==''){
        input1 = '';  fun=''; input2='';
        displayInput(input1);
        return;
    }
        
    if(fun=='add'){
        if(input2==''||input1==''){
        input1 = ''; fun=''; input2='';
        displayInput(input1);
        return;
    }
        result = Number(input1) + Number(input2);
        displayInput(result);
        input1=String(result);
        input2='';
        fun='';
    }
    else if(fun=='sub'){
        if(input2==''||input1==''){
        input1 = ''; fun=''; input2='';
        displayInput(input1);
        return;
    }
        result = Number(input1) - Number(input2);
        displayInput(result);
        input1=String(result);
        input2='';
        fun='';
    }
    else if(fun=='mul'){
        if(input2==''||input1==''){
        input1 = '';  fun=''; input2='';
        displayInput(input1);
        return;
    }
        result = Number(input1) * Number(input2);
        displayInput(result);
        input1=String(result);
        input2='';
        fun='';
    }
    else if(fun=='div'){
        if(input2==''||input1==''){
        input1 = ''; fun=''; input2='';
        displayInput(input1);
        return;
    }
        result = Number(input1) / Number(input2);
        displayInput(result);
        input1=String(result);
        input2='';
        fun='';
    }
}

function dotLogic(event){
     if(fun==''){
        if(input1.includes(".")){return;}
        else {input1 = input1 + ".";
        displayInput(input1);}
    }
    else{
        if(input1.includes(".")){return;}
        else {input2 = input2 + ".";
        displayInput(input2);}
    }
    }



function displayInput(input){
    display.textContent = `${input}`
}

