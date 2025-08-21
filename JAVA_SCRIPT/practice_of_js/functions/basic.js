//     \\//printing table.
// function table(n){
//     for(let i = 1 ; i<=10; i++){
//         console.log(`${n} * ${i} = ${n*i}`);
//     }
// }

// table(5);



//     \\//sum of n num.
// function SumOfN(n){
//     let sum = 0;
//     for(i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }

// ans = SumOfN(15);
// console.log(ans);



//     \\//function expression.
// const sum = function(a,b){
//     return a + b;
// }

// s = sum(2,3);
// console.log(s);



//     \\//function inside function.
// let greet = "hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }

// console.log(greet);
// changeGreet();
// //here changeGreet is called not innerGreet, down one is connected.

// let greet = "hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }

// console.log(greet);
// changeGreet();




//     \\//higher order functions. ex1;
// function multipleGreet(func, n){
//     for(let i = 1; i <= n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet, 2);


//      \\//ex2;
// function oddEvenTest(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }
//     else if (request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     }
//     else{
//         console.log("wrong request.");
//     }
// }

// let request = "odd"; //for odd is that t or f

// let func = oddEvenTest(request);

// func(2); // not odd so f.
// func(3); // odd so t.



//     \\//methods..
// const calculator = {
//     add: function(a,b){
//         return a + b;
//     },
//     //can be write as below.
//     sub(a,b){
//         return a - b;
//     },
//     mul(a,b){
//         return a * b;
//     }
// }

// a1= calculator.add(2,1);
// a2 = calculator.sub(2,1);
// a3 = calculator.mul(2,1);

// console.log("add is :", a1, "mul is :" ,a3);