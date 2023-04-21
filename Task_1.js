'use strict';

const PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],  
    privat: false
};

PersonalMovieDB.start = function() {
  this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while(!this.count  || isNaN(this.count ) ) {
    this.count  = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
PersonalMovieDB.start();

PersonalMovieDB.detectPersonalLevel = function() {
    if (this.count < 10){
        alert('Просмотрено довольно мало фильмов');
    }else if(this.count >= 10 && this.count < 30 ){
        alert('Вы классический зритель');
    }else if(this.count >= 30){
        alert('Вы киноман');
    }else{
        alert('Произошла ошибка');
    }
}
    
PersonalMovieDB.rememberMyFilms = function() {
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
            this.movies[MoviesName] = Feedback;
        }
    }
}

PersonalMovieDB.rememberMyFilms();
PersonalMovieDB.detectPersonalLevel();
console.log(PersonalMovieDB.movies);

PersonalMovieDB.toggleVisibleMyDB = function(privat){
    this.privat = !privat;
}

PersonalMovieDB.showMyDB = function(privat){
    if(!privat){
        console.log(this);
    }
}

PersonalMovieDB.writeYourGenres = function(n){
     for(let i = 0; i < n; i++){
        this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
        if(!this.genres[i]) {
            i--;
        }
    }

    this.genres.forEach((item, index) => console.log(`Любимый жанр №${index + 1} - это ${item}` ));
}

PersonalMovieDB.writeYourGenres(3);

PersonalMovieDB.toggleVisibleMyDB(this.privat);
PersonalMovieDB.showMyDB(this.privat);
