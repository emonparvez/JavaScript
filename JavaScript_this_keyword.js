var comments={};

comments.data=["Good","Nice","Awesome"];

comments.print=function(){
    this.data.forEach(function(el){
        console.log(el); 
    });
};


