import {fetchWithTimeout} from './services';

let movies = require('./data/movies.json');


function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();

moviePromise.then((results)=>{
    console.log(results);
})

export {fetchMovies};