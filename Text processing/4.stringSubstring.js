function stringToSubstring(word, text){
    let found = false;
    for (const part of text.split(" ")){
        if(part.toLowerCase() == word.toLowerCase()){
            console.log(word);
            found = true;
            break
        }
    }
    if(!found){console.log(`${word} not found!`);}
}

stringToSubstring('ajavaScript567',
'aJavascript567 is the best programming language'
);