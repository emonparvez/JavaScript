var movies=[
    {
        title: "In Bruges",
        rating:5,
        bool :true    

    },
    {
        title: "Frozen",
        rating:4.5,
        bool:false
    },
    {
        title: "Mad Max Fury Road",
        rating:5,
        bool:true   
    },
    {
        title: "Les Miserables",
        rating:3.5,
        bool:false   
    }

]


for(var i=0 ; i<movies.length ; i++){

    if(movies[i].bool === true)
    {

        console.log("You have seen " +  movies[i].title + "-" + movies[i].rating + " stars");

    }

    else{
        console.log("You have not seen " +  movies[i].title + "-" + movies[i].rating + " stars");
    }

};