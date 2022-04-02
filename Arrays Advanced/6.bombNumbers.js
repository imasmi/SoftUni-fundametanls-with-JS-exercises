function bombNumbers(numbers, bomb){

    let remove = (bomb, length) => {
        if (numbers.indexOf(bomb) !== -1) {
            let start = 0;
            let count = 0;
            if (numbers.indexOf(bomb) > length) {
                start = Number(numbers.indexOf(bomb)) - Number(length);
                count = (Number(length) * 2) + 1;
            } else {
                start = 0;
                count = Number(numbers.indexOf(bomb)) + length + 1;
            }

            numbers.splice(start, count);
        }
        
        if (numbers.indexOf(bomb) !== -1) {remove(bomb, length);}
    }
    remove(bomb[0], bomb[1]);
    console.log(numbers.reduce((prev, current) => prev + current, 0));
}

bombNumbers([6, 1],
    [9, 3]      
    );