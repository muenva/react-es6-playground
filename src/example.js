export const numberOfKids = 19
export const kids = [
  { name: 'Robert Blakemore', gender: 'male', age: 3 },
  { name: 'Lu Letourneau', gender: 'female', age: 4 },
  { name: 'Jack Salguero', gender: 'male', age: 5 },
  { name: 'Sharyn Harry', gender: 'female', age: 5 },
  { name: 'Charisse Regina', gender: 'female', age: 4 },
  { name: 'Andres Slee', gender: 'male', age: 3 },
  { name: 'Evelynn Dupree', gender: 'female', age: 4 },
  { name: 'Carrol Froehlich', gender: 'female', age: 3 },
  { name: 'Mi Zeh', gender: 'female', age: 4 },
  { name: 'Myrl Velez', gender: 'female', age: 5 },
  { name: 'Waldo', gender: 'male', age: 23 },
  { name: 'Ernestina Haveman', gender: 'female', age: 3 },
  { name: 'Gabriella Stansel', gender: 'female', age: 2 },
  { name: 'Dimple Gonsalez', gender: 'male', age: 3 },
  { name: 'Garret Thaxton', gender: 'male', age: 6 },
  { name: 'Euna Ely', gender: 'female', age: 3 },
  { name: 'Tamatha Drakes', gender: 'female', age: 5 },
  { name: 'Keenan Konieczny', gender: 'male', age: 3 },
  { name: 'Eilene Sidoti', gender: 'male', age: 4 },
  { name: 'Terica Orso', gender: 'male', age: 3 },
  { name: 'Bunny Lockley', gender: 'female', age: 5 }
]

// ************************  Waldo ************************
// const result = kids.find(function (kid) {
//   return kid.name === 'Waldo'
// })

// ************************ BOYS AND GIRLS ************************
// const boys = kids.filter(function (kid) {
//   return kid.gender === 'male'
// })
//
// const girls = kids.filter(function (kid) {
//   return kid.gender === 'female'
// })
//
// const result = { boys, girls }

// ************************ ADULTIFY ************************
// const names = kids.map(function (kid) {
//   kid.isAdult = true
//   return kid
// })
//
// console.log(fakedAdults)
// const result = fakedAdults.map(function (kid) {
//   return kid.name + (kid.isAdult ? ' is an adult ' : ' is not an adult')
// })

// ************************ SORTED ************************
// const result = kids.sort(function (oneKid, otherKid) {
//   return oneKid.age - otherKid.age
// })

// ************************ REMOVE ************************
// const kidsWithCorrectAge = kids.filter(kid => kid.age >= 3 && kid.age <= 6)
// const sortedKidsByAge =  kidsWithCorrectAge.sort((one, other) => one.age - other.age)

//************************ BOYS AND GIRLS ************************
const fakedAdults = kids.map(kid => {
  kid.isAdult = true
  return kid
})
const boys = fakedAdults.filter(kid => kid.gender === 'male')
const girls = fakedAdults.filter(kid => kid.gender === 'female')

const result = { boys, girls }

export default
