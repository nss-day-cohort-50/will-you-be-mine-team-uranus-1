import {getFacilities, setFacility, getMinerals, setMineralPurchase,getFacilityQuantities, getOrderBuilder } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const facilityQuantities = getFacilityQuantities()


document.addEventListener(
    "click",
    (event) => { 
        const mineralContainer = document.querySelector(".mineral--options")
        for (const quantity of facilityQuantities) {
            if ( parseInt(event.target.id) === quantity.facilityId) {
                mineralContainer.innerHTML += MineralButtons()
                setFacility(parseInt(event.target.id))
            }
        }                  
    }       
)


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral" && event.target.checked === true) {
            setMineralPurchase(parseInt(event.target.value ))
        }
    }
)


export const MineralButtons = () => {
    const state = getOrderBuilder()
    
    let html ="<ul>"
    for (const quantity of facilityQuantities) {
        if (state.facilityId === quantity.facilityId) {
            const mineral = minerals.find(mineral => mineral.id === quantity.mineralId)  
                html += `<li>
                            <input ${ (mineral.id === state.mineralPurchaseId) ? "checked" : "" } type="checkbox" name="mineral" value="${mineral.id}"> ${mineral.name} </input>  
                         </li>`  
        }
    }    
   
    html += "</ul>"
    return html
}


export const FacilityButton = () => {
    let state = getOrderBuilder()
    let html = "<section class='facilities--flex'>"
    const facilityButtonList = facilities.map(facility => {
        if(facility.active === true) {
            return `<div>
                <button ${state.governorId > 0 ? "" : "disabled"} name="facilityButton" class="facility--button" id="${facility.id}">${facility.name}</button>
            </div>`
        }
    })
    html += facilityButtonList.join("")
    html += "</section>"

    return html
}









