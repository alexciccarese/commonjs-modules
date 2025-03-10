const person = require('./name')
const hobby = require('./hobbies')

function personProfile() {
  const fullName = person('Lucia', 'Verdi')
  const hobbies = hobby('Cucina', 'Tecnologia', 'Pallavolo')


  return {
    fullName,
    hobbies
  }
}

const result = personProfile()
console.log(result);
