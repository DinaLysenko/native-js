export type CityType = {
    title: string
    houses: Houses[]
    governmentBuildings: GovernmentBuildings[]
    citizensNumber: number
}
type Houses = {
    buildedAt: number
    repaired: boolean
    address: Address
}
type Address = {
    number?: number
    street: Street
}
type Street = {
    title: string
}
type GovernmentBuildings = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: Address
}