function inventory (input) {
    let heroes = {};
    for (const item of input){
        let data = item.split(" / ");
        heroes[data[1]] = {name: data[0]};
        heroes[data[1]]["items"] = data[2];
    }
    for (let key in heroes){
        console.log(`Hero: ${heroes[key]["name"]}`);
        console.log(`level => ${key}`);
        console.log(`items => ${heroes[key]["items"]}`);
    }
}

inventory([
    'Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);