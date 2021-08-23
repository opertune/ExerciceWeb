function afficher(number){
    document.getElementById("formule").value += number;
}

function negative(){
    document.getElementById("formule").value = -Math.abs(document.getElementById("formule").value);
}

function precision(){
    var inputPrecision = parseInt(document.getElementById("updatePrecision").value);
    var num = parseFloat(document.getElementById("formule").value);
    var numLength = num.toString().length;

    if(document.getElementById("formule").value){
        switch(inputPrecision){
            case 0: document.getElementById("result").value = num.toPrecision(numLength); break;
            case 1: document.getElementById("result").value = num.toPrecision(numLength+1); break;
            case 2: document.getElementById("result").value = num.toPrecision(numLength+2); break;
            case 3: document.getElementById("result").value = num.toPrecision(numLength+3); break;
            case 4: document.getElementById("result").value = num.toPrecision(numLength+4); break;
            default: document.getElementById("result").value = num.toPrecision(numLength); break;
        }
    }
}

function clearAffichage(){
    document.getElementById("formule").value = null;
    document.getElementById("result").value = null;
}

function calculer(){
    document.getElementById("result").value = eval(document.getElementById("formule").value);
    precision();
}