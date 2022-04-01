function sorting(input){
    let asc = input.slice().sort((a, b) => a - b);
    let desc = input.sort((a, b) => b - a);
    let result = [];
    
    desc.forEach((el, index) => {
        result.push(el);
        result.push(asc[index]);
    });
    console.log(result.slice(0, desc.length).join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);