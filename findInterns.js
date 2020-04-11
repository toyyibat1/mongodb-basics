const assert = require('assert');

const findMovies = function(db, callback){
    //Get the documents collection
    const myMovies = db.collection('movies');
    //find some documents
    myMovies.findOne({}, function(err, result){
        console.log("Found the First records");
        console.log(result)
    //     myMovies.find({rating: 7}, { projection: {_id: 0} }).toArray(function(err, result){ 
    // assert.equal(err, null);
    // console.log("all movies with a rating of 7");
    // console.log(result)
    myMovies.find({}, { projection: {_id: 0} }).toArray(function(err, result){ 
        assert.equal(err, null);
        console.log("all movies");
        console.log(result)
    });
 });
 };

module.exports = findMovies;