import express from "express";
import { showMessage } from "./modules/message";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", showMessage);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
