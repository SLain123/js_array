let array = [1, 2, 3, 4, 5, 6];

const funMap = (args) => {

 let store = [];
 for (let i = 0; i < args.length; i++) {
  store[i] = args[i] * args[i];
 }
 return store;
}


console.log(funMap(array));

// let sqare = map(array, item => item*item);