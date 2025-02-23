
function greaterNumber(numberOne,numberTwo){
    if (numberOne > numberTwo) {
        return numberOne
    }else if(numberOne < numberTwo){
        return numberTwo
    }else{
        return "Ambos son iguales"
    }
}

function greaterNumberTernario(numberOne, numberTwo) {
    return numberOne === numberTwo ? "Ambos son iguales" : Math.max(numberOne, numberTwo);
}

