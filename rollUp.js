// Используйте метод reduce в комбинации с concat для свёртки массива массивов
// в один массив, у которого есть все элементы входных массивов.

var arrays = [[1, 2, 3], [4, 5], [6]];

const rollUp = arr => {
    return arr.reduce((arr1, arr2) => 
        arr1.concat(arr2), []);
    
}

console.log(rollUp(arrays));


// → [1, 2, 3, 4, 5, 6]

