// let fruits = ["apple", "mango", "kiwi", "banana", "orange"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i])
// }



//in nested..
// let heros = [["thor", "ironman", "spiderman"], ["superman", "flash", "blackadam"]];

// for(let i = 0; i<heros.length; i++){
//     console.log(`list #${i}`);
//     for(let j = 0; j < heros[i].length; j++){
//         console.log(heros[i] [j]);
//     }
// }



//for of loops..
// let fruits = ["mango","litchi","apple", "banana"];

// for (i of fruits) {
//     console.log(i) //here use fruit instade of fruits.
// }



//nested for of loops..
let heros = [["ironman", "hulk", "thor"], ["superman", "flash", "blackadam"]];

for (const list of heros) {
    console.log("Group:", list);
    for (const hero of list) {
        console.log("Hero:", hero);
    }
}