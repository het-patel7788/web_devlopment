//             //object examples..
// let bahubali = {
//     big_bro : "bhalaldev",
//     wife :"devsena",
//     dirctor : "rajamouli",
//             //focus on next lines.
//     null : "nothing",
//     1 : "The bigining",
//     2 : "conclusion",
//     undefined : 3,
// };

//           //how to accesse.
// console.log(bahubali.big_bro); 
// console.log(bahubali["wife"]);
//           // here next line will give error.
//           // console.log(bahubali.1);
//           //next line is perfect as per condition.
// console.log(bahubali[2]);
// console.log(bahubali.null);
// console.log(bahubali["undefined"]);




//next is obj in obj..
const ClassData = {
    stu_one : {
        grade : "A",
        city : "Ahmedabad",
        gender : "male"
    },
    stu_two : {
        grade : "b",
        city : "Ahmedabad",
        gender : "male"
    },
    stu_three : {
        grade : "c",
        city : "goa",
        gender : "male"
    },
    stu_four : {
        grade : "d",
        city : "lakhanav",
        gender : "female"
    },
};

//now how to acsses..
console.log(ClassData.stu_one);
console.log(ClassData.stu_two.grade);
console.log(ClassData.stu_three.city);
//never make mistake like below..
// console.log(ClassData[stu_four]);
//do this as above.




//here we can do this by obj inside arr.
//below is how to acssses.
//classData[0];
//classData[1].grade;