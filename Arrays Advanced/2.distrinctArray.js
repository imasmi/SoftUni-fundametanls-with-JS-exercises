function distinctArray(input){
    console.log(input.filter((el, index) => input.indexOf(el) == index).join(" "));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);