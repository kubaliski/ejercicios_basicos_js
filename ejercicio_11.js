const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
    let sum = 0;
    for (const element of list) {
        if (typeof element === 'number') {
            sum += element;
        } else if (typeof element === 'string') {
            sum += element.length;
        } else {
            console.error("No es un tipo computable en el ejercicio");
        }
    }
    return sum / list.length;
}

console.log(averageWord(mixedElements))