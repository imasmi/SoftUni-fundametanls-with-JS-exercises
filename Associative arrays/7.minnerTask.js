function minnerTask(input){
    let resources = {};
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            if (resources.hasOwnProperty(input[i])) {
                resources[input[i]] = Number(resources[input[i]]) + Number(input[i + 1]);
            } else {
                resources[input[i]] = input[i + 1];
            }
        }
    }
    for (const key in resources ){
        console.log(`${key} -> ${resources[key]}`);
    }
}

minnerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );