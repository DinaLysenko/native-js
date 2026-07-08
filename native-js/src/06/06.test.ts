import type {CityType} from '../01/01-01.ts';
import {beforeEach, test, expect} from 'vitest';


let city: CityType
beforeEach( () => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: 'Hogwarts street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'Souths park str'
                    }
                }

            }
        ],
        citizensNumber: 1000000
    }
})
test('object distraction', ()=> {
   const {title, houses, citizensNumber, governmentBuildings} = city;


    expect(title).toBe('New York');
    expect(houses.length).toBe(3);
    expect(governmentBuildings.length).toBe(2);
    expect(citizensNumber).toBe(1000000);

})
test('array distraction', ()=> {
   const [house1, house2, house3] = city.houses;
   const [building, ...rest]=city.governmentBuildings

    expect(house1.buildedAt).toBe(2012);
    expect(house2.repaired).toBe(false);
    expect(house3.address.number).toBe(200);
    expect(building.type).toBe('HOSPITAL');
    expect(rest[0].type).toBe('FIRE-STATION');


})


