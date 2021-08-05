import { getColonies, getColonyQuantities } from "./database.js"


const colonies = getColonies()
const quantities = getColonyQuantities()

for (const quantity of quantities) {
    if (quantity.colonyId === colony.id) {

        for (const colony of colonies) {
            if (colony.id === parseInt(colonyId)) {
                
                window.alert(`${colony.name} has ${quantity.quantity} tons of ${quantity.mineralId} `)
            }
        }
    }
}

// for (const colony of colonies) {
//     if (colony.id === parseInt(colonyId))

//     for (const quantity of quantities) {
//         if (quantity.colonyId === colony.id)


export const ColonyQuantities = () => {
    let colonyHTML = "<ul>"

    for (const colony of colonies) {
        colonyHTML += `<li id="colony--${colony.id}">${colony.name}</li>`
        
    }
    colonyHTML += "</ul>"
    return colonyHTML
}









