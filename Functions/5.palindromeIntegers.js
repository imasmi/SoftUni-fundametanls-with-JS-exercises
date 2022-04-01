function palindromeIntegers(arr){

    function compare(stringArray){
        console.log(stringArray.toString() == stringArray.reverse().toString());
    }

    for (let int of arr) {
        let stringArray = int.toString().split("");
        compare(stringArray);
    }
    
}

palindromeIntegers([32,2,232,1010]);