//1) ⁃ Напишите функцию любого вида, которая принимает строку и переворачивает ее, например hello -> olleh
function reverseString(str){
    let newString = '', i;
    for (i = str.length - 1; i >= 0; i --) {
        newString += str.charAt(i);
    }
    return newString;
}
console.log(reverseString('Hello'));

//2) -  Напишите функцию, которая принимает неограниченное количество чисел и выводит их среднюю арифметическую
const nums = [1, 10, 8, 2, 4];
const getAverage = (numbers) => {
    let sum = 0
    for (let i = 0; i < numbers.length; i += 1){
        sum += numbers[i]
    }
    return sum / numbers.length
}
console.log(getAverage(nums))

//3) - дан массив [«name», «John», «lastname», «Black», «age», «23»].
// Из этого массива нужно получить объект, где ключом будет name,
// а значение John и так с остальными данными. Все нужно сделать через цикл.
var array = ['name', 'John', 'lastname', 'Black', 'age', '23']
var arrayObj = {}
for(var i = 0; i < array.length; i += 2) {
    var key = array[i]
    var value = array[i + 1]
    arrayObj[key] = value
}
console.log(arrayObj)

//4) - Дан список с разными типами данных, Например :
// [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк», null, ‘uioo’].
// Вам надо одинаковые типы данных объединить в отдельный массив.
// То есть в конечном результате у вас будет несколько массивов c одинаковыми типами данных внутри.
// После отсортируйте массивы от меньшего к большему,
// то есть на первом месте будет массив с наименьшим количеством данных внутри.
const inputList= [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo']
let arrayData = inputList.reduce((arr, item) => {
    const type = typeof item
    arr[type] = arr[type] || []
    arr[type].push(item)
    return arr;
}, {});
const sortArr = Object.values(arrayData).sort((a, {length}) => length - a.length)
console.log(sortArr)





