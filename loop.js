// Аналог цикла for в виде высшей функции, принимает значение, функцию сравнения, функцию 
// обновления и функцию тело.

const loop = (num, func, funcRefresh, funcBody) => {
    if (func(num) == false) {
        return;
    }
    funcBody(num);
    loop(funcRefresh(num), func, funcRefresh, funcBody);
}


loop(10, n => n > 5, n => n - 1, console.log);