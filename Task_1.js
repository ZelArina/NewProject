const NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "default"),
MoviesName1 = prompt("Один из последних просмотренных фильмов","default"),
Feedback1 = prompt("Насколько оцените его?","default"),
MoviesName2 = prompt("Один из последних просмотренных фильмов","default"),
Feedback2 = prompt("Насколько оцените его?","default");
let PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],  
    privat: false
};

PersonalMovieDB.movies[MoviesName1] = Feedback1;
PersonalMovieDB.movies[MoviesName2] = Feedback2;

console.log(PersonalMovieDB.movies);