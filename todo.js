var todo=["Hello"];

var input=prompt("What you like to do?");

while(input !=="quit"){

    if (input==="list"){
        console.log(todo);
    }
    else if(input ==="new"){
        var newtodo=prompt("Enter New TO-DO?");

        todo.push(newtodo);

        // another way
        
        // todo.push(prompt("Enter New TO-DO?"));
        
    }
    input=prompt("What you like to do?");

};
console.log("Ok,You Quit The App");