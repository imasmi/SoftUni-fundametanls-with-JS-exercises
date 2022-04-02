function movies(input){
    let output = [];
    let addMovieValue = (movies, name, key, value) => {
        if (Object.keys(movies).indexOf(name) === -1) { movies[name] = {};}
        movies[name][key] = value;
        return movies;
    }


    let movies = {};
    input.forEach(el => {
        let name = "";
        if (el.includes("addMovie")){
            name = el.replace(/addMovie /, "");
            movies = addMovieValue(movies, name, "name", name);
        } else if (el.includes("directedBy")) {
            let data = el.split(" directedBy ");
            movies = addMovieValue(movies, data[0], "director", data[1]);
        } else if (el.includes("onDate")) {
            let data = el.split(" onDate ");
            movies = addMovieValue(movies, data[0], "date", data[1]);
        }
    })
    
    for (const key in movies) {
        if (Object.entries(movies[key]).length === 3){
            console.log(JSON.stringify(movies[key]));
        }
    }
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );