function max(array) {
    if (array.length === 0) {
        return undefined;
    }
    
    var maximo = array[0];
    for (var j =1; j < array.length; j++) {
        if (array[j] > maximo) {
            maximo = array[j]
        }
    }
    
    return maximo;
    
    }
    
    console.log(max([1, 3, 2])) // 3
    console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
    console.log(max([])) // undefined