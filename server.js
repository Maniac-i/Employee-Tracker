const inquirer = require('inquirer');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Karynnisah0ttie1!",
  database: "cms_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

//view department, role or employee query
connection.query('SELECT * FROM ?', [//insert inquirer variable], (err, res) => {
  if (err) throw err;

  console.table(res);

});

//view department, role or employee query
connection.query('SELECT employee FROM cms_db WHERE ?', [//insert inquirer variable], (err, res) => {
  if (err) throw err;

  console.table(res);

});


// class DB {

// viewDepartments() {
//   query('SELECT * FROM department', (err, res) => {
//     if (err) throw err;

//     console.table(res);

//     });
//   }
// }
// let db = new DB;
// db.viewDepartments;