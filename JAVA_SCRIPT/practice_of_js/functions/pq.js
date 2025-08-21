//    \\//exercise 1 

// function getGreaterThan(pn) {
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // sample array
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > pn) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let pn = Number(prompt("Enter a number between 1 and 10:"));

// let result = getGreaterThan(pn);

// console.log("Numbers greater than", pn, "are:", result);




//    \\//exercise 2

// function getstr(ps) {
//     let ans = "";

//     for (let i = 0; i < ps.length; i++) {
//         if (!ans.includes(ps[i])) {
//             ans += ps[i];
//         }
//     }

//     return ans;
// }

// let ps = prompt("Enter the string here:");
// let result = getstr(ps);

// console.log("String without duplicates:", result);




//    \\//exercise 3

// function GetResult(arr){
//     let temp = "";
//     for( let i = 0; i<arr.length; i++){
//         if(arr[i].length>temp.length){
//             temp = arr[i];
//         }
//     }
//     return temp;
// }

// let num = Number(prompt("jow many country you want to enter"));

// let arr = [];
// for(i=0; i<num; i++){
//     let name = prompt("Enter the country name.");
//     arr.push(name);
// }

// let result = GetResult(arr);

// console.log("The ans is :", result);




//    \\//exercise 4

// function final_num(str){
//     let num = 0;
//     for(i=0; i<str.length; i++){
//         if ("aeiou".includes(str[i])){
//             num = num + 1;
//         }
//     }
//     return num;
// }

// let str = prompt("Enter the string here.");

// let ans = final_num(str);

// console.log("NUmber of vowel in in strings :", ans);



//    \\//exercise 5

// function range(StNum, EnNum){
//     let result = Math.floor(Math.random() * (EnNum - StNum + 1) + StNum);
//     return result;
// }

// let StNum = Number(prompt("Enter a starting number."));
// let EnNum = Number(prompt("Enter the final number."));

// let result = range(StNum, EnNum);

// console.log("Num is :", result);