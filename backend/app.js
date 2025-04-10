import express from "express";
import routes from "./routes/index.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", routes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});