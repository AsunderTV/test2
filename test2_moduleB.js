const fs = require("fs");
var students = [];

module.exports.prepare = function()
{
    var promise = new Promise((resolve, reject) => {

        try {
            fs.readFile('./students.json', (err, data) => {
                if (err) throw err;

                students = JSON.parse(data);

            }) 
              
        } catch (ex) {
            reject ("Unable to read the file");
        }
        resolve ("Success reading file");
        
    })
    return promise;
};

module.exports.getCPA = function()
{
    var allCPA = [];
    var promise = new Promise((resolve, reject) => 
    {
        for (i = 0; i < students.length; i++)
        {
            if (students[i].program = "CPA")
            {
                allCPA.push(students[i]);
            }
        }

        if (students.length == 0)
        {
            var err = "No Data Found";
            reject({"message": err});
        }

        resolve(students);
    })
    return promise;
};


module.exports.highGPA = function()
{
    var highestGPA = students[0].gpa;

    var promise = new Promise ((resolve, reject) => {
    
        for (i = 0; i < students.length; i++)
        {
            if (highestGPA < students[i].gpa)
            {
                highestGPA = students[i].gpa
            }
        }

        if (students.length == 0)
        {
            var err = "No Data Found";
            reject({"message": err});
        }

        resolve(highestGPA);
    })
    return promise;
};
