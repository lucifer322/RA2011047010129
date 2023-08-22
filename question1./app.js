const express = require("express");

const app = express();
app.use(express.json());

app.get('/numbers',async(req,res) => {
    res.send("hi");
    const url1 = req.query.url;
    // console.log(url1);

    const data = await fetch(url1,{
      method:"GET"
    });

    const data1 = await data.json();
    const myArray = data1.numbers;

    const uniqueArray = myArray.filter(function(elem, pos) {
      return myArray.indexOf(elem) == pos;
    });
    console.log(uniqueArray);
});

app.listen('8008', function() {
  console.log("Server started on port 8008");
});