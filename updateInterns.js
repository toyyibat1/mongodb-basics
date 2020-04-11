const assert = require('assert');

const updateMovies = function(db, callback){
    //Get the documents collection
    const myMovies = db.collection('movies');
    myquery = { movie: "The Banker" }
    newvalues = {$set: {movie: "Alita:The batttle Angel", year: "2019", rating:7 }}
    //update some documents
    myMovies.updateOne(myquery, newvalues, function(err, result){ 
        assert.equal(err, null);
        console.log("1 movie updated");
        console.log(result)
    });
 };

module.exports = updateMovies;