import {getFacilities, getMinerals} from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()

export const FacilityButton = () => {
    let html = "<section class='facilities--flex'>"
    const facilityDivsForHTML = facilities.map(facility => {
        if(facility.active === true) {
            return `<div>
                <button class=facility--button id="${facility.id}">${facility.name}</button>
            </div>`
        }
    })
    html += facilityDivsForHTML.join("")
    html += "</section>"

    return html
}
