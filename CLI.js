const inquirer = require('inquirer');

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
  name: "role_deparmentId",
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
  name: "employeeName",
  type: 'input',
  message: 'What employee would you like to update?',
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
        break;
      
      case "View All Roles":
        break;

      case "View All Deparments":
        break;
      
      case "Add Employee":
        break;

      case "Add Role":
        break;

      case "Add Department":
        break;

      case "Update Employee role":
        break;

    }
  })
}

