
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

//Create DB class
class DB {

viewAllEmployees() {
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;

    console.table(res);

    });
  }

viewAllRoles() {
  connection.query('SELECT * FROM role', (err, res) => {
    if (err) throw err;

    console.table(res);

    });
  }

  viewAllDepartments() {
    connection.query('SELECT * FROM deparment', (err, res) => {
      if (err) throw err;
  
      console.table(res);
  
      });
    }

  addEmployee(answers, index) {
    
    connection.query('INSERT INTO employee SET ?', 
    {
     first_name: answers.firstName,
     last_name: answers.lastName,
     role_id: index
    },
    (err, res) => {
      if (err) throw err;
      console.log("Your employee was added!");
      this.viewAllEmployees();
      }
    );
  }

  addRole(answers, roleIndex) {
    
    connection.query('INSERT INTO role SET ?', 
    {
     title: answers.roleTitle,
     salary: answers.salary,
     department_id: roleIndex
    },
    (err, res) => {
      if (err) throw err;
      console.log("Your role was added!");
      this.viewAllRoles();
      }
    );
  }

  addDepartment(answers) {
    
    connection.query('INSERT INTO department SET ?', 
    {
     name: answers.departmentName,
    },
    (err, res) => {
      if (err) throw err;
      console.log("Your department was added!");
      this.viewAllDepartments();
      }
    );
  }

  updateEmployeeRole(answers, newRole) {
    
    connection.query('UPDATE employee SET ? WHERE ?', 
    [
      {
        role_id: newRole
      },
      {
        id: answers.employeeId
      }
    ],
    (err, res) => {
      if (err) throw err;
      console.log("The employees role was updated!");
      this.viewAllEmployees();
      }
    );
  }
}

module.exports = new DB();