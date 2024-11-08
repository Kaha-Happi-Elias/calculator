function appendToDisplay(value){
    document.getElementById('display').value += value;
}
function calculateResult(){
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result; 
}
function clearDisplay(){
    document.getElementById('display').value  = '';
}
function clearOnce(){
    let deleteValue = document.getElementById('display');
    let clear = deleteValue.value;
    if(clear > 0 || clear < 0){
        deleteValue.value = clear.slice(0, -1);
    }
}
function calculatePower() {
    let values = document.getElementById('display').value.split('^');
    let result = Math.pow(parseFloat(values[0]), parseFloat(/*values[1] ? values[1] : */2 ));
    document.getElementById('display').value = result;
}
function calculateSquareRoot(){
    let value = document.getElementById('display').value;
    let result = Math.sqrt(value);
    document.getElementById('display').value = result;
}
/*let message = "Hello world"
let nombre =42
message = "Tutoriel Javascript"

console.log(message + ' '+ nombre)*/