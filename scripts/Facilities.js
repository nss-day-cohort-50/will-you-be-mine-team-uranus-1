import {getFacilities, getMinerals, getFacilityQuantities } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const facilityQuantities = getFacilityQuantities()



document.addEventListener(
    "click",
    (event) => { 
        const mineralContainer = document.querySelector(".mineral--options")
            if ( event.target.name === "facilityButton") {

                    mineralContainer.innerHTML += mineralButtons()
            }
                      
        }       
)



const mineralButtons = () => {
    
    let html ="<ul>"
            for (const quantity of facilityQuantities) {
                for (const mineral of minerals) {
                    if (quantity.mineralId === mineral.id ) {
                            html += `<li>
                             <input type ="checkbox" name="mineral" value="${mineral.id}"> ${mineral.name} </input>  
                            </li>`   
                        }    
                }
            
        
    }
    html += "</ul>"
        return html
}


export const FacilityButton = () => {
    let html = "<section class='facilities--flex'>"
    const facilityButtonList = facilities.map(facility => {
        if(facility.active === true) {
            return `<div>
                <button name="facilityButton" class="facility--button" id="${facility.id}">${facility.name}</button>
            </div>`
        }
    })
    html += facilityButtonList.join("")
    html += "</section>"

    return html
}





