function isIdentical(arr){


    var tracker=arr[0];

    for(var i= 1 ; i <arr.length ; i++){

        
        if(arr[i] !== tracker)
        {
            return false;

        }

    }
        return true;
    

};
