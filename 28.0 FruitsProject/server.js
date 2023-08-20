const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
const dbName = 'fruitsDB'

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err)=>{
    assert.equal(null,err);
    console.log("Connected successfully to server")

    const db = client.db(dbName)

    client.close()
})