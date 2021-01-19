
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

  viewAllEmployees(askAgain) {
    connection.query('SELECT * FROM employee', (err, res) => {
      if (err) throw err;

      console.table(res);
      askAgain(connection);
    })
  }
  
viewAllRoles(askAgain) {
      connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;

        console.table(res);
        askAgain(connection);

      });
    }

  viewAllDepartments(askAgain) {
      connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;

        console.table(res);
        askAgain(connection);

      });
    }

  addEmployee(answers, index, askAgain) {

      connection.query('INSERT INTO employee SET ?',
        {
          first_name: answers.firstName,
          last_name: answers.lastName,
          role_id: index,
          manager_id: parseInt(answers.managerId) || null
        },
        (err, res) => {
          if (err) throw err;
          console.log("Your employee was added!");
          this.viewAllEmployees(askAgain);
          
        }
        );
    }

  addRole(answers, roleIndex, askAgain) {

      connection.query('INSERT INTO role SET ?',
        {
          title: answers.roleTitle,
          salary: answers.salary,
          department_id: roleIndex
        },
        (err, res) => {
          if (err) throw err;
          console.log("Your role was added!");
          this.viewAllRoles(askAgain);
          
        }
      );
    }

  addDepartment(answers, askAgain) {

      connection.query('INSERT INTO department SET ?',
        {
          name: answers.departmentName,
        },
        (err, res,) => {
          if (err) throw err;

          console.log("Your department was added!");
          this.viewAllDepartments(askAgain);
          
        }
        );
    }

  updateEmployeeRole(answers, newRole, askAgain) {

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
          this.viewAllEmployees(askAgain);
          
        }
      );
    }
}

module.exports = new DB();