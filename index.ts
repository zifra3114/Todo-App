#! /usr/bin/env node
import inquirer from "inquirer";

let todos : string[] = ["BIOLOGY","CHEMISTRY","PHYSICS"];
async function createTodo(todos:string[]){
    do{
    let ans = await inquirer.prompt({
        type:"list",
        message:"select an operation",
        name:"select",
        choices:["Add","Update","Veiw","Delete","Exit"],

    });
     if(ans.select ==="Add"){
        let addTodo = await inquirer.prompt({
            type:"input",
            message:"Enter item to add to the list",
            name:"todo",
        });
        todos.push(addTodo.todo);
        todos.forEach(todo =>console.log(todo));

    }
     if(ans.select ==="Update"){
        let updateTodo = await inquirer.prompt({
            type:"list",
            message:"update item in the list",
            name:"todo",
            choices:todos.map(item => item)
        });
        
       let newTodo = await inquirer.prompt(
        {
            type : "input",
            message : "Enter new item",
            name : "newTodo",
        }
       ) 
       todos[todos.indexOf(updateTodo.todo)] = newTodo.newTodo
       todos.forEach(todo =>console.log(todo));
    }
   
    if(ans.select =="Veiw"){
        console.log("***TODO LIST***");
        console.log(todos);
        console.log("*******************");
    }
    if(ans.select ==="Delete"){
        let deleteTodo =await inquirer.prompt({
            type:"list",
            message:"Delete item in the list",
            name:"todo",
            choices:todos.map(item=>item)
        });
        todos =todos.filter(todo => todo !== deleteTodo.todo);
        todos.forEach(todo =>console.log(todo));
        }
        if(ans.select ==="Exit"){
            break;
        }
    }
while(true);
}

createTodo(todos);
    
    