function partyTime(input){
    let guests = input.slice(0, input.indexOf("PARTY"));
    let coming = input.slice(input.indexOf("PARTY") + 1);

    let vip = [];
    let regular = [];
    let count = 0;
    guests.forEach(el => {
        if(coming.indexOf(el) === -1) {
            count++;
            if (Number.isNaN(Number(el[0]))){
                regular.push(el);
            } else {
                vip.push(el);
            }
        } else {
            coming.splice(coming.indexOf(el), 1);
        }
    });

    console.log(count);
    vip.forEach(el => console.log(el));
    regular.forEach(el => console.log(el));
}

partyTime([
'7IK9Yo0h',
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
]);