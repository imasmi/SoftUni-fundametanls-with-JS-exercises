function perfectNumber(num){

    let devisiorsTotal = num => {
        let total = 0;
        for (let i = 1; i < num; i++){
            if( num % i === 0) { total += i;}
        }
        return total;
    }

    if (devisiorsTotal(num) == num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(26);