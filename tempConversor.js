//KELVIN WEATHER PROJECT 

//The actual temp in kelvin, will not change so its a const
const kelvin = 293

//Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Celsius is 273 degrees less than Kelvin.
let celsius = kelvin - 273

//Use this equation to calculate Fahrenheit, then store the answer in a variable
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit)

//Use this equation to calculate Newton, then store the answer in a variable
let newton = celsius * 0.33
newton = Math.floor(newton)

console.log(`The tempetature is ${fahrenheit} degrees Farenheit and ${newton} degrees in Newton scale.`)
