import {  it, expect } from 'vitest';
import {student} from './01.ts';
/*
describe('should be equal', () => {
    // Исходные данные (или функция, возвращающая объект)
    const createUser = (id: number) => ({
        id,
        name: 'Artem',
        role: 'admin',
        settings: {
            theme: 'dark',
            notifications: true
        }
    });
*/

    it('should be equal', () => {
        expect(student.name).toEqual('Ivan');
        expect(student.address.country).toEqual('United Kingdom');
        expect(student.address.city.name).toEqual('America');
        expect(student.technologies.length).toEqual(3);
    });



