let array = [10, 8, 3, 4, 5, 6];

const funFilter = (args, fun) => {

    let store = [],
        j = -1;

    for (let i = 0; i < args.length; i++) {
        if (fun(args[i]) == true) {
            j++;
            store[j] = args[i];
            }
    }
    return store;
}

const greaterThan4 = (num) => {
    if (num > 4) {
        return true;
    }
}


console.log(funFilter(array, greaterThan4)); // Функция

console.log(array.filter(greaterThan4));