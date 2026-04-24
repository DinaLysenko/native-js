export type Student={
    name: string
    age: number
    gender: string
    address: Address
    technologies: Technologies[]
}
type Address = {
    country: string
    city: City
}
type City = {
    name: string
    street: string
}
type Technologies= {
    id: number
    title: string
    isDone: boolean
}
export const student:Student = {
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