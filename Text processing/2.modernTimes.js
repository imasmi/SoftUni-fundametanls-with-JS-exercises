function modernTimes(input){
    let pattern = /#([A-Za-z]+)/g;
    let check = input.match(pattern);
    check.forEach(el => console.log(el.substring(1)));
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');