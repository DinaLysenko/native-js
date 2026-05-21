import type {GovernmentBuildings, Houses} from '../01/01-01.ts';

export const changeBudget = (buildings: GovernmentBuildings, budget: number) => {
    return buildings.budget += budget
}
export const repairHouse = (houses: Houses) => {
    return houses.repaired = !houses.repaired
}
export const toFireStaff = (buildings: GovernmentBuildings, staff: number) => {
    return buildings.staffCount -= staff
}
export const toHireStaff = (buildings: GovernmentBuildings, staff: number) => {
   return buildings.staffCount += staff
}