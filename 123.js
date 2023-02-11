const arrayOfSheep
 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

function countSheeps(arrayOfSheep) {
  let trueValues = 0
  console.log(arrayOfSheep)
  arrayOfSheep.forEach(item => {
    if (item === true) {
      trueValues += 1
    }
  })
  console.log(trueValues)
}
