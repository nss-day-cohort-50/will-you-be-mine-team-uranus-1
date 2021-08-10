import { getFacilities, setFacility, getMinerals, setMineralPurchase, getFacilityQuantities, getOrderBuilder } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const facilityQuantities = getFacilityQuantities()


document.addEventListener(
    "click",
    (event) => {
            const itemClicked = event.target
            if (itemClicked.id.startsWith("facility")){
                const [, facilityId]=itemClicked.id.split("--")
                setFacility(parseInt(facilityId))
            }        
    }
)


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral" && event.target.checked === true) {
            setMineralPurchase(parseInt(event.target.value))
        }
    }
)


export const MineralButtons = () => {
    const state = getOrderBuilder()

    let facButton = document.querySelector("${facility.id}")
    if (facButton.id === facilityQuantities.facilityId) {

        facButton += "<ul>"
        for (const quantity of facilityQuantities) {
            if (state.facilityId === quantity.facilityId) {
                const mineral = minerals.find(mineral => mineral.id === quantity.mineralId)
                html += `<li>
                                <input ${(mineral.id === state.mineralPurchaseId) ? "checked" : ""} type="checkbox" name="mineral" value="${mineral.id}"> ${mineral.name} </input>  
                            </li>`
            }
        }
        facButton += "</ul>"
        return facButton
    }
}


export const FacilityButton = () => {
    let state = getOrderBuilder()
    let html = "<section class='facilities--flex'>"
    const facilityButtonList = facilities.map(facility => {
        if (facility.active === true) {
            return `<div>
                <button ${state.governorId > 0 ? "" : "disabled"} name="facilityButton" class="facility--button" id="facility--${facility.id}">${facility.name}</button>
            </div>`
        }
    })
    html += facilityButtonList.join("")
    html += "</section>"

    return html
}









