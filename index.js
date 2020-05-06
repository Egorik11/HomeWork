class Worker{
  constructor(firstName, lastName, rate, days){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rate = rate;
    this.days = days;
  }
  getName(){
    return this.firstName
  }
  getSurname(){
    return this.lastName
  }
  getRate(){
    return this.rate
  }
  getDays(){
    return this.days
  }
  getSalary(){
    return this.rate * this.days
  }
}
let worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());
