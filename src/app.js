const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");
const routes = require("./routes");
const { createConnection } = require("typeorm");
const path = require("path");

// Middlewares
app.use(express.json());
app.use("/css", express.static(path.resolve(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/jquery", express.static(path.resolve(__dirname, "../node_modules/jquery/dist")));
app.use("/js", express.static(__dirname + "/views/js"));
// Configuración para versión 6.0.3 de handle-bars
app.engine("handlebars", expressHandlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

// Routes Front-end
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/", (req, res) => {
  res.render("landing");
});

// Routes API
app.use("/api/v1", routes);


//Conexión a la base de datos
createConnection()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

// Configuración del servidor
app.listen(8080, () => {
  console.log("Servidor habilitado");
});
