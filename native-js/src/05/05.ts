import type {GovernmentBuildings, Houses} from '../01/01-01.ts';

export const getStreetsTitlesOfGovernmentBuildings=(buildings: GovernmentBuildings[])=>{
    return buildings.map(b=>(b.address.street.title))
}
export const getStreetsTitlesOfHouses=(houses: Houses[])=>{
    return houses.map(h=>(h.address.street.title))
}
export const greetingMessageForStreet=(houses: Houses[])=>{
    return houses.map(h=>(`Welcome to the ${h.address.street.title}`))
}