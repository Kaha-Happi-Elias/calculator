function appendToDisplay(value){
    $("#display").val($("#display").val() + value);
}

function clearDisplay(){
    $("#display").val('');
}

function clearOnce(){
    values = $("#display").val();
    if (values >=  0){
        $("#display").val(values.slice(0, -1));
    }
    //if you don't want to use the if you can use this $("#display").val(values.substring(0, values.length -1));
}

function calPower(){
    let values = $("#display").val().split('^');
    $("#display").val(Math.pow(parseFloat(values[0]), parseFloat(values[1] || 2)));
    // or use this let result = Math.pow(parseFloat(value[0]), parseFloat(values[1] || 2));
    //$("#display").val(result);
}

function calculateSquareRoot(){
    $("#display").val(Math.sqrt($("#display").val()));
}

function calculateResult(){
    $("#display").val(eval($("#display").val()))
}