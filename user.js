user = []

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this._firstName = _firstName
    this._lastName = _lastName
    this._age = _age
    this._location = _location
  }
}
user.push(new User())
console.log(User("mario,mario,32,roma"))
