let array = [1, 2, 3, 4, 5, 6];

const funSplice = (arr, start, count, args) => {

 let store = [];

 if (args !== undefined) {      // проверка есть ли аргументы для добавления 1.1
  console.log(args);
 }
 else {
  if (start >= 0) {           // Проверка стартового индекса на положительное значение 2.1
   if (count > 0) {          // Проверка количественного индекса на положительное значение 2.1
    
    let step1 = -1;
    
    for (let i = start; i < (start + count); i++) {
        step1++;
        store[step1] = arr[i];
     }
     console.log(store, array);
   }                         
  }
 }

}


funSplice(array, 2, 3);






// console.log(array.splice(2, 3), array);
// console.log(array.splice(2, 0), array);
// console.log(array.splice(2), array);
// console.log(array.splice(-4, 3), array)
// console.log(array.splice(2, 3, 9, 8, 7), array);
// console.log(array.splice(2, 1, 9, 8, 7), array);