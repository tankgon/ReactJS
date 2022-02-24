function getMax(a){
    return Math.max(...a.map(e => Array.isArray(e) ? getMax(e) : e));
}
var arr = [1,2,3];
console.log(getMax(arr));