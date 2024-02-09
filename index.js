#### Часть 1: Создание и Инициализация Базы Данных

1. Создание объекта "EmployeeDB":

let EmployeeDB = {
  employees: [],
  
  addEmployee: function (name, position, department) {
    let employee = {
      name: name,
      position: position,
      department: department
    };
    this.employees.push(employee);
  },
  
  deleteEmployee: function (employee) {
    let index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  },
  
  updateEmployee: function (employee, name, position, department) {
    employee.name = name;
    employee.position = position;
    employee.department = department;
  },
  
  getEmployees: function () {
    return this.employees;
  }
};


2. Добавление сотрудников:

EmployeeDB.addEmployee("Bella Hadid", "Manager", "Sales");
EmployeeDB.addEmployee("Adriana Lima", "Assistant Manager", "Sales");
EmployeeDB.addEmployee("Kate Moss", "Developer", "IT");


3. Чтение данных:

function printEmployees() {
  let employees = EmployeeDB.getEmployees();
  for (let i = 0; i < employees.length; i++) {
    console.log("Name: " + employees[i].name + ", Position: " + employees[i].position + ", Department: " + employees[i].department);
  }
}

printEmployees();

#### Часть 2: Работа с Объектами

1. Модификация данных:

function capitalizeNames() {
  let employees = EmployeeDB.getEmployees();
  for (let i = 0; i < employees.length; i++) {
    employees[i].name = employees[i].name.toUpperCase();
  }
}

function lowercaseDepartments() {
  let employees = EmployeeDB.getEmployees();
  for (let i = 0; i < employees.length; i++) {
    employees[i].department = employees[i].department.toLowerCase();
  }
}

capitalizeNames();
lowercaseDepartments();
printEmployees();

2. Удаление и обновление:

EmployeeDB.deleteEmployee(EmployeeDB.getEmployees()[0]); // Удаление первого сотрудника
EmployeeDB.updateEmployee(EmployeeDB.getEmployees()[0], "Bella Lapadula", "Manager", "Marketing"); // Обновление данных первого сотрудника
printEmployees();


#### Часть 3: Продвинутые Операции с Объектами

1. Клонирование и Слияние:

function cloneEmployeeDB() {
  return JSON.parse(JSON.stringify(EmployeeDB));
}

function mergeEmployeeDBs(db1, db2) {
  let employees1 = db1.getEmployees();
  let employees2 = db2.getEmployees();
  for (let i = 0; i < employees2.length; i++) {
    db1.addEmployee(employees2[i].name, employees2[i].position, employees2[i].department);
  }
}

let EmployeeDB2 = cloneEmployeeDB(); // Клонирование
mergeEmployeeDBs(EmployeeDB, EmployeeDB2); // Слияние
printEmployees();


2. Обход свойств:

function getDepartments() {
  let employees = EmployeeDB.getEmployees();
  let departments = {};
  for (let i = 0; i < employees.length; i++) {
    departments[employees[i].department] = true;
  }
  return Object.keys(departments);
}

console.log(getDepartments());


#### Часть 4: Задание на Практику

1. Сравнение объектов:

function compareEmployees(employee1, employee2, fields) {
  for (let i = 0; i < fields.length; i++) {
    if (employee1[fields[i]] !== employee2[fields[i]]) {
      return false;
    }
  }
  return true;
}

let employee1 = {name: "Bella Hadid", position: "Manager", department: "Sales"};
let employee2 = {name: "Bella Hadid", position: "Assistant Manager", department: "Marketing"};

console.log(compareEmployees(employee1, employee2, ["name", "department"])); // true
console.log(compareEmployees(employee1, employee2, ["name", "position"])); // false

Объекты не могут быть сравнены напрямую как примитивы, потому что они являются ссылочными типами данных. При сравнении двух объектов мы сравниваем не их значения, а ссылки на них. Даже если два объекта имеют одинаковые свойства и значения, они будут разными объектами в памяти компьютера. Поэтому мы должны сравнивать свойства объектов по отдельности, а не сами объекты.