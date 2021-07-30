// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

////////EXAMPLE FORM///////////////
  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })
////////////////////////////

////////FORM 1 - USING REDUCE ///////////////
  // Find form 1, and handle its submit event
  const form1 = document.querySelector('#form1')

  // An array created from user input (Max 5 values)
  let data1 = []

  form1.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    //Capturing user input
    const inputField = document.querySelector('#form1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)


    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data1.push(userNumber)

    }

    // Clear the form field so the user can try again
    inputField.value = ''

  //  data1.push(userNumber)
    console.log(data1)

    //Max input allowed (number limit)
    if (data1.length > 4) {
      // Use reduce to sum all the 5 numbers input by the user
      const sum = data1.reduce((accumulator, currentElement) => accumulator + currentElement);

      console.log(sum)
      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#form1 .output').innerHTML = sum

      data1 = []
      window.alert("You have reached your 5 number limit! Count will start over on your next input")
    }

  })


////////FORM 2 USING MAP///////////////
// Find form 2, and handle its submit event
const form2 = document.querySelector('#form2')

// An array created from user input (Max 3 values)
let data2 = []

form2.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
  event.preventDefault()

  //Capturing user input
  const inputField = document.querySelector('#form2 .input')
  const userInput = inputField.value
  const userNumber = parseInt(userInput)


  // If the user's input was a number, push it into the array and continue
  if(!isNaN(userNumber)){
    data2.push(userNumber)

  }

  // Clear the form field so the user can try again
  inputField.value = ''

//  data1.push(userNumber)
  console.log(data2)
  /// Clear the form field so the user can try again
  //inputField.value = ''

  if (data2.length > 2) {
    // Use "map" to square the values from the user input array
    let squared = data2.map(function(value){
      return (value*value)
    })

    console.log(squared)
    // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
    document.querySelector('#form2 .output').innerHTML = squared

    data2 = []
    window.alert("You have reached your 3 number limit! Count will start over on your next input")
  }

})

////////FORM 3 USING FILTER///////////////
// Find form 3, and handle its submit event
const form3 = document.querySelector('#form3')

// An array created from user input (Max 4 values)
let data3 = []

form3.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
  event.preventDefault()

  //Capturing user input
  const inputField = document.querySelector('#form3 .input')
  const userInput = inputField.value
  const userNumber = parseInt(userInput)


  // If the user's input was a number, push it into the array and continue
  if(!isNaN(userNumber)){
    data3.push(userNumber)

  }

  // Clear the form field so the user can try again
  inputField.value = ''

//  data1.push(userNumber)
  console.log(data3)
  /// Clear the form field so the user can try again
  //inputField.value = ''

  if (data3.length > 3) {
    // Use "filter" to find values over 30
    let over_thirty = data3.filter(function(value){
      return (value > 30)
    })

    console.log(over_thirty)
    // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
    document.querySelector('#form3 .output').innerHTML = over_thirty

    data3 = []
    window.alert("You have reached your 4 number limit! Count will start over on your next input")
  }

})

////////FORM 4 USING EVERY ///////////////
// Find form 4, and handle its submit event
const form4 = document.querySelector('#form4')

// An array created from user input (Max 4 values)
let data4 = []

form4.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
  event.preventDefault()

  //Capturing user input
  const inputField = document.querySelector('#form4 .input')
  const userInput = inputField.value
  const userNumber = parseInt(userInput)


  // If the user's input was a number, push it into the array and continue
  if(!isNaN(userNumber)){
    data4.push(userNumber)

  }

  // Clear the form field so the user can try again
  inputField.value = ''

//  data1.push(userNumber)
  console.log(data4)
  /// Clear the form field so the user can try again
  //inputField.value = ''

  if (data4.length > 2) {
    // Use "every" to show if all values over 10 (true/false)
    let over_ten = data4.every(function(value){
      return (value > 10)
    })

    console.log(over_ten)
    // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
    document.querySelector('#form4 .output').innerHTML = over_ten

    data4 = []
    window.alert("You have reached your 3 number limit! Count will start over on your next input")
  }

})
////////////////////////////

})
