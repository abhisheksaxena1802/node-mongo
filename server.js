const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 8080;
const MongoClient = require('mongodb').MongoClient;

const router = require('./route/route');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", router);

app.use((req, res) => {
    res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
})

const dbUrl = "mongodb+srv://admin123:admin123@clusterdev-1nlgd.mongodb.net/test?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
MongoClient.connect(dbUrl, options, (err, database) => {
    if (err) {
        console.log(`FATAL MONGODB CONNECTION ERROR: ${err}:${err.stack}`)
        process.exit(1)
    }
    app.locals.db = database.db('Dummydata');
    console.log( app.locals.db);
    app.listen(port, () => console.log(`Example app listening on port port!`))
})

