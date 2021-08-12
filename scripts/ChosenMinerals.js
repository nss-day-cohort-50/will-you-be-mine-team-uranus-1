import { getOrderBuilder, getMinerals, getFacilityQuantities } from "./database.js"


const minerals = getMinerals()
const mineralFacilities = getFacilityQuantities()



export const ChosenMinerals = () => {
    let html = "<ul>"
    const state = getOrderBuilder()
    for (const mineralAndFacility of state.mineralArray) {
        const MatchedMineralFacility = mineralFacilities.find(mineralFacility => mineralAndFacility.facilityId === mineralFacility.facilityId && mineralAndFacility.mineralId === mineralFacility.mineralId)
        for (const mineral of minerals) {
            if (MatchedMineralFacility.mineralId === mineral.id)
                html += `<li name="mineral" > ${MatchedMineralFacility.quantity} tons of ${mineral.name} costs $${mineral.price} thousand.  </li>`
        }
    }
    return html += "</ul>"
}


