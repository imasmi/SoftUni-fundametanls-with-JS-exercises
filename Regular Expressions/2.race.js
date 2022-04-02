function race(input){
    let racers = {};
    input.shift().split(", ").forEach(el => {
        racers[el] = 0;
    });

    for (let data of input) {
        if(data == 'end of race'){break;}
        let searchName = /[A-Za-z]/g;
        let nameRegex = data.match(searchName);
        if(nameRegex !== null) {
            let name = nameRegex.join("");
            if (racers.hasOwnProperty(name)){
                let searchDistance = /[0-9]/g;
                let distance = data.match(searchDistance);
                let ran = distance.reduce((a,b) => Number(a) + Number(b), 0);
                racers[name] = Number(racers[name]) + ran;
            }
        }
    }
    
    racers = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${racers[0][0]}`);
    console.log(`2nd place: ${racers[1][0]}`);
    console.log(`3rd place: ${racers[2][0]}`);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);