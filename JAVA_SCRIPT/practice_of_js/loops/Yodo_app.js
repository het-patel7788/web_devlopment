let todo  = [];

let req = prompt("please enter your request").toLowerCase();;

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("-------");
        for(let i = 0 ; i < todo.length ; i++ ){
            console.log(i, todo[i]);
        }
        console.log("-------");
    }
    else if(req == "add"){
        let task = prompt("pelase enter the task you want");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delet"){
        let idx = prompt("pelase enter the index you want to delet.");
        todo.splice(idx,1);
        console.log("task deleted.")
    }
    else{
        console.log("wrong request.");
    }
    req = prompt("please enter your request");
}
console.log(req)