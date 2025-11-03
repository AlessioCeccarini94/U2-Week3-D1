const petsList = []

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  //ricerca stesso owner

  checkOwner = function (petList) {
    if (petList != null && petList.length > 0) {
      return petList.some((e) => {
        return e.ownerName === this.owneName && e.petName !== this.petName
      })
    }
    return false
  }
}

const castagna = new Pet("Castagna", "Alessio", "cane", "meticcio")
console.log(castagna)

// recupero input

const petName = document.getElementById("pet-name")
const ownerName = document.getElementById("owner-name")
const species = document.getElementById("species")
const breed = document.getElementById("breed")

const form = document.getElementById("pet-form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const petNameInput = petName.value
  const ownerNameInput = ownerName.value
  const speciesInput = species.value
  const breedInput = breed.value

  const singlePet = new Pet(
    petNameInput,
    ownerNameInput,
    speciesInput,
    breedInput
  )

  petsList.push(singlePet)
  console.log(petsList)

  const singlePetLi = `name: ${singlePet.petName} - owner name: ${
    singlePet.ownerName
  } - species: ${singlePet.species} - breed: ${
    singlePet.breed
  } - check owner: ${singlePet.checkOwner(petsList)}`

  const newLi = document.createElement("li")
  newLi.innerText = singlePetLi

  const petUl = document.getElementById("pet-list")

  petUl.appendChild(newLi)
})
