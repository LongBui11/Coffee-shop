
function arrToObj(arr) {
    var obj = arr.reduce(function (acc, curr) {
        acc[curr[0]] = curr[1];
        return acc
    }, {})
    return obj
}

const obj1 = arrToObj([
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi']
])

console.log(obj1);
