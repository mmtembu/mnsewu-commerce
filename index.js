import bodyParser from "body-parser";
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("Healthy");
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`)
})