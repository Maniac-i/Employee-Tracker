USE cms_db;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),("Salesperson", 80000, 1);

INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2), ("Software Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);

INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ashley", "Rodriguez", 3), ("Sarah", "Lourd", 6), ("Malia", "Brown", 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 2, 10), ("Kevin", "Tupik", 4, 7), ("Tom", "Allen", 7, 8);