import {concat, indexOfArray, pushArray, toReversedArray} from "./02_02.js";

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let number2 = [1, 2, 3, 4, 5]
test('element to be added in the end of array', () => {
    let arrayLength1 = pushArray(number, 4, 5, 6)
    let arrayLength2 = pushArray(number, [4, 5, 6, 7, 8, 9])
    expect(arrayLength1).toEqual(13)
    expect(number[number.length - 1]).toEqual(9)
    expect(arrayLength2).toEqual(19)
})
test('element to be added in the end of new array', () => {
    let newArray1 = concat(number2, 'd', 'k', 's', 'a')
    let newArray2 = concat(number2, [6, 7, 8])
    expect(newArray1.length).toEqual(9)
    expect(newArray2.length).toEqual(8)
    expect(number2.length).toEqual(5)
})
test('should be return index', () => {
    let index1 = indexOfArray(number2, 3)
    let index2 = indexOfArray(number2, 6)
    let index3 = indexOfArray(number2, 4, -2)
    let index4 = indexOfArray(number2, 2, -5)
    expect(index1).toEqual(2)
    expect(index2).toEqual(-1)
    expect(index3).toEqual(3)
    expect(index4).toEqual(1)
})
test('array should be reversed', () => {
    let newArray1 = toReversedArray(number2)
    let newArray2 = toReversedArray([1, , 3, 4])
    expect(newArray1).toEqual([5, 4, 3, 2, 1])
    expect(newArray2).toEqual([4, 3, undefined, 1])
})