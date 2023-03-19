const kelvin = 0; //constant kelvin is assinged as 293
let celsius = kelvin - 273; //Conversion of kelvin to celsius
console.log(`The temperature is ${celsius} degrees Celsius`)
let fahrenheit = Math.floor(celsius * (9/5) + 32);/* fahrenheit is given by this formula rounding off the value by using .floor() method */
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = Math.floor(celsius*(33/100)); //Conversion of celsius to newton
console.log(`The temperature is ${newton} degrees Newton`);