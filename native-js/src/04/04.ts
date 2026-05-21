import type {CityType, GovernmentBuildings, Houses} from '../01/01-01.ts';

export const demolishHousesOnTheStreet = (city: CityType, name: string) => {
    city.houses = city.houses.filter(h => h.address.street.title!==name)
  }

  export const getHousesOnTheStreet=(houses:Houses[], street: string)=>{
    return houses.filter(h => h.address.street.title===street)
  }
  export const getBuildingsWithStaffCountGreaterThen=( buildings: GovernmentBuildings[], number:number)=>{
    return buildings.filter(b => b.staffCount>number)
  }