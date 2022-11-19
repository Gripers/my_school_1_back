require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const filialsRouter = require('./routers/filials');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/filials', filialsRouter);

const server = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
      })
      .then(() => console.log('db: ok'))
      .catch(() => console.log('db: fail'));
    app.listen(8080, () => console.log('http://localhost:8080'));
  } catch (e) {
    console.log(e);
  }
};

server();
