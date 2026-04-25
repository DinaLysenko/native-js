import {test, expect} from 'vitest';
import {multiply, splitString, sum} from './01-02.ts';

let a: number;
let b: number;
let str: string;


test('sum should be correct', () => {
    let result = sum(8, 7)
    let result2 = sum(4, 2)
    expect(result).toBe(15)
    expect(result2).toBe(6)
})


test('multiply should be correct', () => {
    let result = multiply(8, 7)
    let result2 = multiply(4, 2)
    expect(result).toBe(56)
    expect(result2).toBe(8)
})


test('string should be split correct', () => {
    let result = splitString('My name is Dina')
    let result2 = splitString('Hello,   my friend!')
    expect(result.length).toBe(4)
    expect(result2.length).toBe(3)
    expect(result[0]).toBe('my')
    expect(result[1]).toBe('name')
    expect(result[2]).toBe('is')
    expect(result[3]).toBe('dina')
    expect(result2[0]).toBe('hello')
    expect(result2[1]).toBe('my')
    expect(result2[2]).toBe('friend')
})
