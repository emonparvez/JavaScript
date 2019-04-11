var todo=["Hello"];

var input=prompt("What you like to do?");

while(input !=="quit"){

    if (input==="list"){
      listTodo();
        
    }
    else if(input ==="new"){
        
        addedTodo();  
    }

    else if(input==="delete"){
     deletedTodo();
    }

    input=prompt("What you like to do?");

};
console.log("Ok,You Quit The App");


function listTodo(){
       
    console.log("**********");
    todo.forEach(function(todolist,i)
    {

    console.log(i + ":" + todolist);

    });
    console.log("**********");

};




function addedTodo(){
    var newtodo=prompt("Enter New TO-DO?");
    todo.push(newtodo);

    console.log("Todo added");
    // another way
    // todo.push(prompt("Enter New TO-DO?"));
};


function deletedTodo(){
    var index= prompt("What index do you want to delete?");
    //splice used to delete an specific number of element of an array
    todo.splice(index,1);

    console.log("Todo deleted");
};