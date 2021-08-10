import { getColonies, getColonyQuantities, getMinerals } from "./database.js"


const colonies = getColonies()
const quantities = getColonyQuantities()
const minerals = getMinerals()

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("")) {
//             const [, colonyId] = itemClicked.id.split("--")



//             for (const colony of colonies) {
//                 if (colony.id === parseInt(colonyId)) {

//                     for (const quantity of quantities) {
//                         if (quantity.colonyId === colony.id) {
//                             for (const mineral of minerals) {
//                                 if (mineral.id === quantity.mineralId) {
                                    
//                                     window.alert(`${colony.name} has ${quantity.quantity} tons of ${mineral.name} `)
//                                 }
//                             }
                            
//                         }
//                     }
//                 }
//             }
//         }
//     }
// )


export const ColonyQuantities = () => {
    let colonyHTML = "<ul>"

    for (const colony of colonies) {
        colonyHTML += `<li class="colony--quantities" id="colony--${colony.id}">${colony.name}</li>`

    }
    colonyHTML += "</ul>"
    return colonyHTML
}









