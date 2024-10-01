var a = document.getElementById("input-1");
var b = document.getElementById("input-2");

function ad(){
    var result = parseInt(a.value)  + parseInt(b.value);
    document.getElementById("answer").innerHTML = result;
    clear();
}

function sub(){
    var result = parseInt(a.value)  - parseInt(b.value);
    document.getElementById("answer").innerHTML = result;
    clear();
}

function mul(){
    var result = parseInt(a.value)  * parseInt(b.value);
    document.getElementById("answer").innerHTML = result;
    clear();
}

function div(){
    var result = parseInt(a.value)  / parseInt(b.value);
    document.getElementById("answer").innerHTML = result;
    clear()
}

function clear(){
    a.value=(" ");
    b.value=(" ");
}