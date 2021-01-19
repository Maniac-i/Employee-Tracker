const inquirer = require('inquirer');
const db = require('./index');

let roles = ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant', 'Legal Team Lead', 'Lawayer'];
let departments = ['Sales', 'Engineering', 'Finance', 'Legal'];

function returnRoles() {
  return roles;
};

function returnDepartments() {
  return departments;
};

let questions = [{
  name: 'main',
  type: 'rawlist',
  message: 'What would you like to do?',
  choices: [
    "View All Employees",
    "View All Roles",
    "View All Deparments",
    "Add Employee",
    "Add Role",
    "Add Department",
    "Update Employee role"
  ]
},
//Add Employee Questions
{
  name: "firstName",
  type: 'input',
  message: 'What is the employees first name?',
  when: (answer) => answer.main === 'Add Employee'
},
{
  name: "lastName",
  type: 'input',
  message: 'What is the employees last name?',
  when: (answer) => answer.main === 'Add Employee'
},
{
  name: "managerId",
  type: 'input',
  message: 'Does the employee have a manager? If so, what is the managers ID?',
  when: (answer) => answer.main === 'Add Employee'
},
{
  name: "roleId",
  type: 'list',
  message: 'What is the employees role?',
  choices: returnRoles(),
  when: (answer) => answer.main === 'Add Employee'
},
{
  name: "employee_deparmentId",
  type: 'list',
  message: 'What Department is the Employee in?',
  choices: returnDepartments(),
  when: (answer) => answer.main === 'Add Employee'
},
//Add Role Questions
{
  name: "roleTitle",
  type: 'input',
  message: 'What is the roles title?',
  when: (answer) => answer.main === 'Add Role'
},
{
  name: "salary",
  type: 'input',
  message: 'What is the roles salary?',
  when: (answer) => answer.main === 'Add Role'
},
{
  name: "role_departmentId",
  type: 'list',
  message: 'What Department is the Employee in?',
  choices: returnDepartments(),
  when: (answer) => answer.main === 'Add Role'
},
//Add Department Questions
{
  name: "departmentName",
  type: 'input',
  message: 'What is the Departments name?',
  when: (answer) => answer.main === 'Add Department'
},
//Update Employee Role Questions
{
  name: "employeeId",
  type: 'input',
  message: 'What is the ID of the employee you would like to update?',
  when: (answer) => answer.main === 'Update Employee role'
},
{
  name: "newRole",
  type: 'list',
  message: 'What is the employees NEW role?',
  choices: returnRoles(),
  when: (answer) => answer.main === 'Update Employee role'
},
]

function main() {
  inquirer.prompt(questions).then((answers) => {

    switch (answers.main) {
      case "View All Employees":
        return db.viewAllEmployees(askAgain);

      case "View All Roles":
        return db.viewAllRoles(askAgain);

      case "View All Deparments":
        return db.viewAllDepartments(askAgain);

      case "Add Employee":
        let index = roles.indexOf(answers.roleId) + 1;
        return db.addEmployee(answers, index, askAgain);

      case "Add Role":
        console.log(answers.role_departmentId)
        let roleIndex = departments.indexOf(answers.role_departmentId) + 1;
        roles.push(answers.roleTitle);
        db.addRole(answers, roleIndex, askAgain);
        break;

      case "Add Department":
        departments.push(answers.departmentName);
        return db.addDepartment(answers, askAgain);

      case "Update Employee role":
        let newRole = roles.indexOf(answers.newRole) + 1;
        return db.updateEmployeeRole(answers, newRole, askAgain);
    }
  })
}

let askAgain = (connection) => {
  inquirer.prompt(
    {
      type: 'confirm',
      name: "askAgain",
      message: 'Would you like to do something else?',
      default: true
    }
  ).then((answers) => {
    if (answers.askAgain) {
      main();
    } else {
      console.log("GOODBYE");
      connection.end();
    }
  });
}

main();

