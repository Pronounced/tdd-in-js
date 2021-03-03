const base = require('../index');

//add
test('add 1 + 2 to equal 3', () => {
    expect(base.add([1,2])).toBe(3);
})

test('add 0 to any number to equal that number', () => {
    expect(base.add([0,2])).toBe(2);
})

//subtract

test('subtract 1 from 2 to equal 1', () =>{
    expect(base.subtract([1,2])).toBe(-1);
})

test('subtract "bill" - "parrot" to equal NaN', () => {
    expect(base.subtract(['bill', 'parrot'])).toBe(NaN);
})

//divide

test('divide 1 by 0 to return "Error"', () => {
    expect(base.divide([1,0])).toBe("Cannot Divide By Zero");
})

test('divide 1 by 1 to return 1', () => {
    expect(base.divide([1,1])).toBe(1);
})

test('divide 1 by 0 by 1 to return "Error"', () => {
    expect(base.divide([1, 0, 1])).toBe("Cannot Divide By Zero");
})

test('divide 1 by null to return 1', () => {
    expect(base.divide([1, ])).toBe(1);
})

test('divide null by 1 to return "Error"', () => {
    expect(base.divide([ , 1])).toBe("Error");
})

test('divide two strings to return "Error"', () => {
    expect(base.divide(['test1','test2'])).toBe("Error");
})

//multiply
test('multiply any number by zero to return zero', () => {
    expect(base.multiply([Math.random(), 0])).toBe(0);
})

test('multiply any number by a string to return "Error"', () => {
    expect(base.multiply([Math.random(), "testStr"])).toBe("Error");
})

test('multiply two strings to return "Error"', () => {
    expect(base.multiply(["testStr1", "testStr2"])).toBe("Error");
})

test('multiply 2 by 3 to return 6', () => {
    expect(base.multiply([2,3])).toBe(6);
})

test('multiply 2 by -3 to return -6', () => {
    expect(base.multiply([2,-3])).toBe(-6);
})

test('multiply -2 by -3 to return 6', () => {
    expect(base.multiply([-2,-3])).toBe(6);
})