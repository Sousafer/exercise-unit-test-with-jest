const fromDollarToYen = function(valueInYen){
   let valueInDollar = valueInYen * 0.0093;
   return valueInDollar;
}
const fromEuroToDollar = function(valueInEuro){
     let valueInDollar = valueInEuro * 1.2;
     return valueInDollar;
}
const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen * 0.0066;  
    return valueInEuro;
}
const multiply = (a,b) =>{
return a*b
}
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromYenToPound,  fromDollarToYen};