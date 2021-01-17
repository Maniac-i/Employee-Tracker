const inquirer = require('inquirer');



function main() {
  inquirer.prompt(questions).then()
}

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
    "View All Employees?",
    "View All Roles",
    "View All Deparments",
    "Add Employee",
    "Add Role",
    "Add Department",
    "Update Employee role"
  ]
},
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
  name: "roleId",
  type: 'list',
  message: 'What is the employees role?',
  choices: returnRoles(),
  when: (answer) => answer.main === 'Add Employee'
},
{
  name: "deparmentId",
  type: 'list',
  message: 'What is the employees role?',
  choices: returnDepartments(),
  when: (answer) => answer.main === 'Add Employee'
},
]

main();

