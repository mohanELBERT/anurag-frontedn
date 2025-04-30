// function hello(callbackFn) {
//   console.log("hello");
//   callbackFn();
// }
// function goodMrng() {
//   console.log("good morning");
// }
// function goodEvng() {
//   console.log("good Evening");
// }

// hello(goodEvng);

// function sumOfSquares(a,b){
//     let val1 = square(a);
//     let val2 = square(b);
//     return val1 + val2
// }
// function sumOfCubes(a,b){
//     let val1 = cube(a);
//     let val2 = cube(b);
//     return val1 + val2
// }

// function sumOfSomething(a,b,clbfn){
//     let val1 = clbfn(a);
//     let val2 = clbfn(b);
//     return val1 + val2
// }

// function square(x){
//     return x*x
// }

// function cube(x){
//     return x*x*x
// }

// // console.log(sumOfSquares(3,4));
// // console.log(sumOfCubes(3,4));

// console.log(sumOfSomething(10,10,cube));

// let newArr = []
// for(let i =0; i<arr.length; i++){
//     let val = arr[i] * 2;
//     newArr.push(val)
// }
// console.log(newArr);
// let arr = [1, 2, 3, 4, 5];

// let newarr = arr.map( (ele) => {
//   return ele * 3;
// });

// console.log(newarr);


// let filArr = [1,2,4,5,3];
// let newFilArr = filArr.filter(evenValues)
// function evenValues(ele){
//     return ele == 9;
// }
// console.log(newFilArr);

// console.log("This is sowmya")
// let tinnam = false;
// setTimeout(()=>{
//     tinnam = true  
// },5000);
// let value =  setInterval(()=>{
//     console.log("Babu Thinnara?");
//     if(tinnam){
//         clearInterval(value)
//     }
// }, 1000);
// console.log(tinnam);

console.log("Hello");
let count =0;
for(let i=0; i<10000000; i++){
    count = count + i;
}
setTimeout(()=>{
    console.log("itu focus cheyyandi");
}, 3000)
console.log(count);
console.log("Bye");

