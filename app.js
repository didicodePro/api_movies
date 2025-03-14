import express from "express";
import routes from "./src/routes/index.js";

const app = express();

//loalhost:3000/
app.use("/", routes);

export default app;
