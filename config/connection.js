var mysql =  require("mysql");

//Create Connections
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'findit_postS', 
});

//connect to database
con.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});



module.exports =con ;