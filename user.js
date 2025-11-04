const user = []

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  compareage = function compareage(user2) {
    if (this.age < user2.age) return `${this._firstName} è più piccolo di `
  }
}

const singleUser = new User("Mario", "Rossi", "32", "Rome")
const singleUser2 = new User("Gianni", "Bianchi", "26")

user.push(singleUser)
user.push(singleUser2)

console.log(singleUser)
console.log(user)
