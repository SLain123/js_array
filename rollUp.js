// Используйте метод reduce в комбинации с concat для свёртки массива массивов
// в один массив, у которого есть все элементы входных массивов.

var arrays = [[1, 2, 3], [4, 5], [6]];

const rollUp = arr => {
    let result = arr.reduce(function(arr1, arr2) {
        return arr1.concat(arr2);
        
    });
    return result;
}


console.log(rollUp(arrays));


// → [1, 2, 3, 4, 5, 6]

