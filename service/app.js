var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");

var indexRouter = require("./routes/index");
var dienThoaiRouter = require("./routes/dien-thoai");
var phieuDatHangRouter = require("./routes/phieu-dat-hang");

var app = express();
// var uriMongoDB =
  // "mongodb+srv://tdn1997:21011997@cluster0-dckbr.mongodb.net/cua_hang";
var uriMongoDB = "mongodb://localhost:27017/cua_hang";
var corsOption = { origin: "http://localhost:3000" };

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOption));

//connect to mongoDB
mongoose
  .connect(uriMongoDB, { useNewUrlParser: true })
  .then(result => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.log(error);
  });

app.use("/", indexRouter);
app.use("/dien-thoai", dienThoaiRouter);
app.use("/phieu-dat-hang", phieuDatHangRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
