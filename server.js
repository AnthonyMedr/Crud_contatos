const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json());

const apiRouter = require("./routes/api");
const webRouter = require("./routes/web");

require('./app/bootstrap');

const public_path = "public";
const views_path = "views";

app.use(express.static(public_path));
app.set("view engine", "ejs");
app.set("views", [
    views_path
]);

app.use('/api', apiRouter);
app.use('/', webRouter);


const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Servidor web iniciado: http://localhost:${PORT}/`);
});