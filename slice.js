let array = [100, 0, 1, 2, 3, 4, 5];

const funSlice = (start, end, arr) => {

 let store = [],
     step = -1;

 for (let i = start; i < end; i++) {
  step++;
  store[step] = arr[i]
 }
 return store;
}

console.log(funSlice(1, 4, array));

console.log(array.slice(1, 4,));