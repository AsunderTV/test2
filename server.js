var express = require("express");
var app = express();
var path = require("path");
var test2 = require('./test2_moduleB.js');
var HTTP_PORT = process.env.PORT || 8080;



app.get("/", function(req,res)
{
    res.send(`<h2>Declaration (text size in heading 2):</h2>
    <p>The rest text is displayed in paragraph as shown in screen shot.</p>
    <p> I acknowledge the College's academic integrity policy - and my own integrity - remain in effect wheter my work is 
        done remotely or onsite. Any test or assignment is an act of trust between me and my instructor, and especially with
        my classmates... even when no one is watching. I declare I will not break that trust. </p>
    <p> Name: <mark>Kayin Benjamin</mark> </p>
    <p> Student Number: <mark>113415210</mark> </p>
    <a href = '/CPA'> Click to visit CPA Students </a> <br> <br>
    <a href = '/highGPA'> Click to see who has the highest GPA</a>`);
});

app.get("/CPA", function(req,res){
    test2.getCPA().then((data) => res.json (data))
    .catch((err) => res.json({"message": err}))
});


app.get("/highGPA", function(req,res){
    test2.highGPA().then((data) => res.json (data))
    .catch((err) => res.json({"message": err}))
});



app.use(function(req, res){
    res.status(404).send("UH OH: 404 ERROR");
});

 
test2.prepare().then((data) => {
   
    app.listen(HTTP_PORT, () => console.log(`Express http server listening on port: ${HTTP_PORT}`));
    })
    .catch(() => {
    console.log("There was an error initializing");
});
