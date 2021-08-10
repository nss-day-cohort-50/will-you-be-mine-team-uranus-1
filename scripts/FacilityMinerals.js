import { getOrderBuilder, getFacilityQuantities, getMinerals } from "./database.js"

const mineralFacilities = getFacilityQuantities()
const minerals = getMinerals()

export const facilityMinerals = () => {
    const state = getOrderBuilder()
    if (state.facilityId !== 0 ) {
        //1.filter mineral facility to matching id in mineralfacilities
        const matchingMinerals = mineralFacilities.filter(mineralFacility => mineralFacility.facilityId === state.facilityId)
        //2. map mineral facilities to get qtys
        return matchingMinerals.map(mineralObject => {
            const matchingMineralObject = minerals.find(mineral => mineral.id === mineralObject.mineralId)
            return `<input type="radio" name="mineral--purchase" >${matchingMineralObject.name} ${mineralObject.quantity} tons`
        }).join ("") 
    }
    else{
        return ""
    }
}