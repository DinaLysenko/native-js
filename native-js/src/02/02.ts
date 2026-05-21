import type {Student, Technologies} from '../01/01.ts';

export const addTechnologies = (technologies: Technologies[], skill: string) => {
    return technologies.push({
        id: technologies.length+1,
        title: skill,
        isDone: false
    })
}
export const changeTechnologiesStatus = (technologies: Technologies, status: boolean) => {
    technologies.isDone = status
}
export const countryOfStudent = (student: Student, title: string) => {
    return  student.address.country===title
}