import { getOrderBuilder, getFacilityQuantities, getMinerals } from "./database.js"

const mineralFacilities = getFacilityQuantities()
const minerals = getMinerals()

export const MineralDisplay = () => {
    const state = getOrderBuilder()
    const mineralFacilityObjects = mineralFacilities.filter(mineralFacilityObject => state.facilityId === mineralFacilityObject.facilityId)
    const arrayMatchedItems = mineralFacilityObjects.map(mineralFacilityObject => {
    const MatchedMineralObject = minerals.find(mineral => mineral.id === mineralFacilityObject.mineralId)    
        return `<div>
        <input type="radio">${mineralFacilityObject.quantity} ${MatchedMineralObject.name}
        </div>` 
    }).join("")

    return arrayMatchedItems
}