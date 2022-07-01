// Single Dimension - Array
var cars = ['BMW', 'Ford', 'Honda'];
console.log("Cars: " + cars);
console.log("Cars[0]: " + cars[0]);
console.log("Cars[1]: " + cars[1]);
console.log("Cars[2]: " + cars[2]);
// Multi Dimension - Array
var Arr = [[1, 2, 3], [5, 6, 7]];
console.log(Arr[0][0]);
console.log(Arr[0][1]);
console.log(Arr[0][2]);
console.log();
console.log(Arr[1][0]);
console.log(Arr[1][1]);
console.log(Arr[1][2]);
//Array by using the Array object.  
var arrObj = new Array("Abhishek", "Nidhi", "Jay");
for (var i = 0; i < arrObj.length; i++) {
    console.log(arrObj[i]);
}
//Passing arrays in function  
var arrParse = new Array("Abhishek", "Nidhi", "Jay");
function showFun(arrval) {
    for (var i_1 = 0; i_1 < arrval.length; i_1++) {
        console.log(arrParse[i_1]);
    }
}
//Calling arrays in function  
showFun(arrParse);
