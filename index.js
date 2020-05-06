class User {
  constructor(options){
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.age = options.age;
    this.gender = options.gender;
    this.phone = options.phone;
  }
}

class Developer extends User{
  constructor(options){
    super(options)
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.age = options.age;
    this.gender = options.gender;
    this.phone = options.phone;
    this.skills = options.skills;
    this.company = options.company;
    this.tasks = options.tasks;
  }
  // метод, который добавляет скиллы пользователя
  getskills(skills){
    return this.skills = `${this.skills} ${skills}`
  }

  // сеттер, который перезаписывает номер телефона
  set newPhon(newPhone){
    this.phone = newPhone
  }
}

class Designer extends User{
  constructor(options){
    super(options)
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.age = options.age;
    this.gender = options.gender;
    this.phone = options.phone;
    this.skills = options.skills;
    this.company = options.company;
    this.tasks = options.tasks;
  }
}

const user = new User({
  firstName: "Ivan",
  lastName: "Ivanov",
  age: 21,
  gender: "male",
  phone: 999.999
})

const developer = new Developer({
  firstName: "Vika",
  lastName: "Ulitochka",
  age: 29,
  gender: "female",
  phone: 95644545445,
  skills: "HTML, CSS",
  company: "DataArt",
  tasks: "Завершить верстку"
})

const designer = new Designer({
  firstName: "Vasya",
  lastName: "Lastochka",
  age: 33,
  gender: "male",
  phone: 95644545445,
  skills: "Photoshop",
  company: "Epam",
  tasks: "Выполнить Web-дизайн"
})

console.log(user)
developer.getskills("Java, Git")
console.log(developer);
console.log(designer)