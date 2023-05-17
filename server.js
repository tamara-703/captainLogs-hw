//add dotenv
require("dotenv").config();

//require express
const express = require("express");

//controllers
const logsController = require('./controllers/logs');


//method override (for delete http method)
const methodOverride = require("method-override");

const app = express();

//port
const PORT = process.env.PORT || 3000;

//mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

//middleware
//use method override
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log("running on all routes");
  next();
});

//encode on url parameters
app.use(express.urlencoded({ extended: false }));

//views
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//models
const Logs = require("./models/logs");

//routes

app.use('/logs', logsController);

//default homepage
app.get("/", (req, res) => {
  res.render('Homepage');
});


//mongoose connection & listen
const launchMongoose = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
      console.log("connected to mongo");
    });

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

launchMongoose();
