import { getOrderBuilder, getMinerals } from "./database.js"


const minerals = getMinerals()


export const ChosenMinerals = () => {
    const state = getOrderBuilder()
    let html ="<ul>"
    for (const mineral of minerals) {
        if (state.mineralPurchaseId === mineral.id) {
            const mineral = minerals.find(mineral => mineral.id === state.mineralPurchaseId)  
                html += `<li>
                            ${mineral.id} costs $ ${mineral.price}
                         </li>`  
        }
    }    
   
    html += "</ul>"
    return html
}