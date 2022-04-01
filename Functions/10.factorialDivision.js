function fractionalDevision(x, y){
    let factorial = (num, total = false) => {
        total = !total ? num : total;
        if(num == 1){
            return total;
        } else {
            num = num - 1;
            return factorial(num, total * num);
        }
    }

    let factorialX = factorial(x);
    let factorialY = factorial(y);
    console.log((factorialX/factorialY).toFixed(2));
}

fractionalDevision(6,
    2
    );