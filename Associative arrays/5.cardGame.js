function cardGame(input){
    let players = new Set();
    let powerValues = {2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13,A:14};
    let typeValues = {S:4,H:3,D:2,C:1};
    input.forEach(el => {
        let data = el.split(": ");
        if (players.hasOwnProperty(data[0])){
            let cards = players[data[0]];
            data[1].split(", ").forEach( el => cards.add(el));
            players[data[0]] = cards;
        } else {
            let cards = new Set();
            data[1].split(", ").forEach( el => cards.add(el));
            players[data[0]] = cards;
        }
    });

    for (const key in players){
        let total = 0;
        for (let card of players[key]){
            let type = card.slice(-1);
            let power = card.slice(0,-1);
            total += powerValues[power] * typeValues[type];
        }
        console.log(`${key}: ${total}`);
    }
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
     );
