import { getOrderBuilder, getFacilityQuantities, getMinerals, setMineralChoice } from "./database.js"

const mineralFacilities = getFacilityQuantities()
const minerals = getMinerals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral" && event.target.checked === true) {
            setMineralChoice(parseInt(event.target.id))
        }
    }
)


export const MineralDisplay = () => {
    const state = getOrderBuilder()
    const mineralFacilityObjects = mineralFacilities.filter(mineralFacilityObject => state.facilityId === mineralFacilityObject.facilityId)
    const arrayMatchedItems = mineralFacilityObjects.map(mineralFacilityObject => {
    const MatchedMineralObject = minerals.find(mineral => mineral.id === mineralFacilityObject.mineralId)    
        return `<div>
        <input name="mineral" id="${MatchedMineralObject.id}" type="radio">${mineralFacilityObject.quantity} ${MatchedMineralObject.name}
        </div>` 
    }).join("")

    return arrayMatchedItems
}