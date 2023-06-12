require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')

// Initialize DB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Define your routes and middleware here
// app.get("/", (req, res) => {
//     res.send("Hello Pratham!");
// })

app.use(express.json())

const transfersRouter = require('./routes/transfers')
app.use('/api', transfersRouter)

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});