import type {Student} from '../01/01.ts';
import {describe, expect, test} from 'vitest';
import {addTechnologies, changeTechnologiesStatus, countryOfStudent} from './02.ts';

let student: Student
describe('student', () => {
    student={
        name: 'Ivan',
        age: 25,
        gender: 'male',
        address: {
            country: 'United Kingdom',
            city: {
                name: 'America',
                street: 'America'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML',
                isDone: true
            },
            {
                id: 2,
                title: 'JS',
                isDone: true
            },
            {
                id: 3,
                title: 'CSS',
                isDone: false
            },
        ]
    }
})
test('added new skill for student', ()=>{
    addTechnologies(student.technologies, 'React')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('React')
    expect(student.technologies[3].id).toBe(4)
    expect(student.technologies[3].isDone).toBe(false)
})
test('change status of technologie', ()=>{
    changeTechnologiesStatus(student.technologies[2], false)

    expect(student.technologies[2].isDone).toBe(false)
})
test('country of student should be right', ()=>{
    countryOfStudent(student, 'India')
    countryOfStudent(student, 'United Kingdom')

    expect(student.address.country).toBe(false)
    expect(student.address.country).toBe(true)
})