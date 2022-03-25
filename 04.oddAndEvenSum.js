function oddAndEvenSum(numb){
    let data = numb.toString().split("");
    
    let even = data.filter( num => num % 2 === 0);
    let odd = data.filter( num => num % 2 !== 0);

    function sum(arr) {
        return arr.reduce((prev, current) => Number(prev) + Number(current), 0);
    }

    console.log(`Odd sum = ${sum(odd)}, Even sum = ${sum(even)}`);
}

oddAndEvenSum(3495892137259234);