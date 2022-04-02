function searchForNumber(input, criteria){
    input.splice(criteria[0]);
    input.splice(0, criteria[1]);
    console.log(`Number ${criteria[2]} occurs ${input.filter(el => el == criteria[2]).length} times.`);
}

searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );