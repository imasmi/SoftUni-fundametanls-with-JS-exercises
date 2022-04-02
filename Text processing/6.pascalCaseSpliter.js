function pascalCaseSpliter(input){
    console.log(input.match(/[A-Z][a-z]*|[a-z]+/g).join(", "));
}

pascalCaseSpliter('ASimpleTask');