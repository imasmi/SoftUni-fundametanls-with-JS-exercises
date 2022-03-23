function sumAndSubstract(a,b,c) {
    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y){
        return x - y;
    }

    console.log(subtract(sum(a, b), c));
}

sumAndSubstract(23,6,10);