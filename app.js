const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-kszkn.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
    .then(
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    )
    .catch(err => console.log(err))