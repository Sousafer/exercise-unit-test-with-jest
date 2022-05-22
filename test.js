
const { sum, fromDollarToYen } = require('./app.js');

test("One yen should be 0.0093 dollar",function(){
    const {fromDollarToYen} = require('./app.js')
    const dollars = fromDollarToYen(1)
    const expected = 1 * 0.0093
    expect(dollars).toBe(expected);
})

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(dollars).toBe(expected); 
})

test("One yen should be 0.0066 british pound",function(){
    const {fromYenToPound} = require('./app.js')
    const pound = fromYenToPound(1)
    const expected = 1 * 0.0066
    expect(pound).toBe(expected);
})



