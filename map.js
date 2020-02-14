let array = [1, 2, 3, 4, 5, 6];

const funMap = (args, fun) => {

 let store = [];
 for (let i = 0; i < args.length; i++) {
  store[i] = fun(args[i]);
 }
 return store;
}


const multy = (a) => {
 return a * a;
}

console.log(funMap(array, multy)); // Функция

console.log(array.map(multy));