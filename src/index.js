import {fetchWithTimeout} from './services';

function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
}


let movies = require('./data/movies.json');

let moviePromise = fetchMovies();

moviePromise.then((results)=>{
    console.log(results);
})

export {fetchMovies};