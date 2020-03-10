// Реализована функция эмитирующая метод every, принимающая в качестве параметров массив
// и функцию тестирования (пепеликативная функция). Реализация через цикл.


const every = (array, test) => {
    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (test(array[i]) == false) 
        result = false;
    }
    return result;
  }
  
console.log(every([1, 3, 5], n => n < 10));
  // → true
console.log(every([2, 4, 16], n => n < 10));
  // → false
console.log(every([], n => n < 10));
  // → true