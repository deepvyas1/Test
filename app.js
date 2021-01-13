const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({key: "Its a demo response"});
});

app.listen(3000, () => {
    console.log("Started Listening on port 3000...");
})