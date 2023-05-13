function maxIndex(arreglo) {
    if (arreglo.length === 0) {
        return -1;
    }

    var maximo = arreglo[0];
    var indicemax =0

    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo [i];
            indicemax = i
        }
    }

    return indicemax
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1