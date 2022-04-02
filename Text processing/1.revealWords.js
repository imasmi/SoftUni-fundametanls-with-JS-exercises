function revealWords(find, output){
    find.split(", ").forEach( el => {
        output = output.replace("*".repeat(el.length), el);
    });
    console.log(output);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);