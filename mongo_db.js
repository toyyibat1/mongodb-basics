const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// const insertMovies = require('./interns');
const findMovies = require('./findInterns');

const url = 'mongodb://localhost:27017';

const dbName = 'kareeba';

const client = new MongoClient(url, {useUnifiedTopology:true,
                                    useNewUrlParser:true});

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Database created by Kareeba!");

    const db = client.db(dbName);

    // insertMovies(db, function(){
      findMovies(db, function(){
            client.close();
        });
    });
  // });
