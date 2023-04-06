const NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],  
    privat: false
};

if (PersonalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
}else if(PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30 ){
    alert('Вы классический зритель');
}else if(PersonalMovieDB.count >= 30){
    alert('Вы киноман');
}else{
    alert('Произошла ошибка');
}

for(let i = 0; i < 2; i++){
    let MoviesName = prompt("Один из последних просмотренных фильмов",""),
    Feedback = prompt("Насколько оцените его?","");
    if(MoviesName === null || MoviesName.length == 0 || MoviesName.length > 50){
        i--;
        continue;
    }else if(Feedback === null|| Feedback.length == 0){
        i--;
        continue;
    }else{
        PersonalMovieDB.movies[MoviesName] = Feedback;
    }
}
    

console.log(PersonalMovieDB.movies);