var result = document.getElementById("result");
var zero =  document.getElementById("number0");
var numberW0 = document.getElementById("numberW0");
var numberDot = document.getElementById("numberDot");
var solar = document.getElementById("solar");

var divided = document.getElementById("divided");
var multiplied = document.getElementById("multiplied");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");

var start = 0;
var finish = 0;
var decimal = 0;  

divided.disabled = true;
multiplied.disabled = true;
minus.disabled = true;
plus.disabled = true;

if(start === 1){
    numberDot.disabled = true;
}

zero.addEventListener('click',function(){
    if (start == 0){
        result.value = "0.";
        start = 1;
        numberDot.disabled = true;
    }
});

numberW0.addEventListener('click',function(){
    if (start === 0){
        result.value = "0.";
        start = 1;
        numberDot.disabled = true;
    }
});

numberDot.addEventListener('click',function(){
    numberDot.disabled = true;
    if (start === 0){
        result.value = "0.";
        start = 1;
    } 
});

function countUp() {
    start = 1;
}

function display(value) {
    divided.disabled = false;
    multiplied.disabled = false;
    minus.disabled = false;
    plus.disabled = false;
    finish = result.value.length + 1;
    console.log(finish);
    decimal = 0;
    result.value += value;
    result.value = result.value.slice(0, 11);
    
    if (finish > 10) {
    solar.textContent = ('これ以上入力できません');
    display.disabled = true;
    finish -= 1;}
    
    } 
    

function clearScreen() {
    result.value = "";
    start = 0;
    decimal = 0;
    finish = 0;
    divided.disabled = true;
    multiplied.disabled = true;
    minus.disabled = true;
    plus.disabled = true;
    numberDot.disabled = false;
    solar.textContent = "";
}
 
divided.addEventListener('click',function(){
    decimal = 1;
    if (decimal === 1){
        divided.disabled = true;
        multiplied.disabled = true;
        minus.disabled = true;
        plus.disabled = true;
        numberDot.disabled = false;
    }
});

multiplied.addEventListener('click',function(){
    decimal = 1;
    if (decimal === 1){
        divided.disabled = true;
        multiplied.disabled = true;
        minus.disabled = true;
        plus.disabled = true;
        numberDot.disabled = false;
    }
});

minus.addEventListener('click',function(){
    decimal = 1;
    if (decimal === 1){
        divided.disabled = true;
        multiplied.disabled = true;
        minus.disabled = true;
        plus.disabled = true;
        numberDot.disabled = false;
    }
});

plus.addEventListener('click',function(){
    decimal = 1;
    if (decimal === 1){
        divided.disabled = true;
        multiplied.disabled = true;
        minus.disabled = true;
        plus.disabled = true;
        numberDot.disabled = false;
    }
});
    
 
function calculate() {
    var p = result.value;
    var q = eval(p);
    result.value = q;
    result.value = result.value.slice(0, 11);
    decimal = 0;
    numberDot.disabled = false;
    finish = result.value.length;
}
 
function pushBackSpase() {
    result.value = result.value.slice(0, -1);
    finish = result.value.length;
    console.log(finish);
    solar.textContent = "";
    
}

