let array = [1, 2, 3, 4, 5, 6, 7];

const funReduce = (arg, fun) => {
 result = fun(arg[0], arg[1]);

 for (i = 2; i < arg.length; i++) {
  result = fun(result, arg[i]);
 }
 return result;
}

console.log(funReduce(array, sum)); // функция

console.log(array.reduce(sum));

function sum(a, b) {
 c = a + b;
 return c;
}

