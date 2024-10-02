 let dString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
 let myarray = dString.split("\n")

console.log(myarray)

let line = 'ID,Name,Occupation,Age'
let slow = line.split(',')

let mainArray = []


for(let i = 0; i < myarray.length; i++) {
    let wordsString = myarray[i]

    let wordsArray = wordsString.split(',')
    mainArray[i] = wordsArray
}
 console.log(mainArray)

 let rayObject = []

 for(let i = 0; i < myarray.length; i++) {
   let object = {}
   for(let x = 0; x < mainArray[i].length; x++) {
    object[mainArray[0][x].toLowerCase()]= mainArray[i][x]
   }
   rayObject.push(object)
   

   }

   console.log(rayObject)
    // let wordsArray = wordsString.split(',')
    // mainArray[i] = wordsArray

    



