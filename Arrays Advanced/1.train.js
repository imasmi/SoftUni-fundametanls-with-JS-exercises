function train(input){
    let wagon = input[0].split(" ");
    let capacity = input[1];
    input.forEach((element, index) => {
        if (index > 1) {
            if(element.includes("Add")){
                wagon.push(element.split("Add ")[1]);
            }  else {
                for (let i = 0; i < wagon.length; i++) {
                    if (Number(element) + Number(wagon[i]) <= capacity){ wagon[i] = Number(element) + Number(wagon[i]); break;}
                }
            }
        }
    });
    console.log(wagon.join(" "))
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);