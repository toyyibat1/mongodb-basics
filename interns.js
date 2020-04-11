
const assert = require('assert');

const insertMovies = function(db, callback){
    //Get the movies collection
    const myMovies = db.collection("movies");

    var movies = [ {movie: "The Banker", year: "2020", rating: 8},  
    {movie: "Bad Boys", year: "2020", rating: 7}, 
    {movie: "The Hunt", year: "2020", rating: 7}, 
    {movie: "Bloodshot", year: "2020", rating: 7.5},
    {movie: "First Cow", year: "2020", rating: 6.5} 
  ]
    //insert some movies
    myMovies.insertMany(movies, function(err, result){
    assert.equal(err, null);
    assert.equal(5, result.result.n);
    assert.equal(5, result.ops.length);
    console.log("Number of Movies inserted: "+ result.insertedCount);
    callback(result);
    });
 };

module.exports = insertMovies;

