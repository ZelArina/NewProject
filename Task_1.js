'use strict';
let NumberOfFilms;

function start() {
    NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(!NumberOfFilms || isNaN(NumberOfFilms) ) {
        NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();
const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],  
    privat: false
};

function detectPersonalLevel() {
    if (PersonalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    }else if(PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30 ){
        alert('Вы классический зритель');
    }else if(PersonalMovieDB.count >= 30){
        alert('Вы киноман');
    }else{
        alert('Произошла ошибка');
    }
}
    
function rememberMyFilms() {
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
}

rememberMyFilms();
detectPersonalLevel();
console.log(PersonalMovieDB.movies);

function showMyDB(privat){
    if(!privat){
        console.log(PersonalMovieDB);
    }
}

function writeYourGenres(){
        for(let i = 0; i < 3; i++){
        PersonalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

showMyDB(PersonalMovieDB.privat);

