const Animal = require('./animal')

function validateFound(animal) {
  if (animal == null) {
    const error = new Error('Animal not found') // Error with message
    error.status = 404 // Store status for res.status() to use
    throw error
  }
}

const animals = Animal.all()
console.log('All animals', animals)

const animalWithLetterE = Animal.search('e')
console.log('Animals with letter ‘e’', animalWithLetterE)

console.log('Animal with id 1', Animal.find(1))
console.log('Animal with id 2', Animal.find(2))
console.log('Animal with id 99', Animal.find(99))

const animal1 = Animal.findAndUpdate(1, { count: 5000 })
console.log('Updated animal 1', animal1)
console.log('All animals', Animal.all())

const animal2 = Animal.destroy(2)
console.log('Delete animal 2', animal2)
console.log('All animals', Animal.all())
