let array = [1, 2, 3, 4, 5, 6];

const funForEach = (args, fun) => {
 for (i = 0; i < args.length; i++) {
  fun(args[i]);
 }
}

const alert = (a) => {
console.log(a);
}

funForEach(array, alert); // функция

array.forEach(item => console.log(item));