function houseParty(input){
    let list = [];
    let errors = [];

    
    input.forEach(el => {
        if (el.includes("is not going!")) { // Not going items
            let name = el.replace(/ is not going!/, "");
            if (list.indexOf(name) !== -1){
                list.splice(list.indexOf(name), 1);
            } else {
                errors.push(`${name} is not in the list!`);
            }
        } else { // Going items
            if (list.indexOf(el.replace(/ is going!/, "")) !== -1) {
                errors.push(`${el.replace(/ is going!/, "")} is already in the list!`);
            } else {
                list.push(el.replace(/ is going!/, ""));
            }
        }
    });
    errors.forEach(el => console.log(el));
    list.forEach(el => console.log(el));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

);