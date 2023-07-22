const express = require("express")
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());

app.get("/" , (req,res) =>{
    res.send("College is submitting ")
})
app.listen(port, () =>{
    console.log(`COllege is on port ${port}`);
})