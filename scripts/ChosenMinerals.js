import { getOrderBuilder, getMinerals } from "./database.js"




const minerals = getMinerals()



// original code
export const ChosenMinerals = () => {
    const state = getOrderBuilder()
    let html ="<ul>"
    for (const mineral of minerals) {
        if (state.mineralId === mineral.id) {
            
                html += `<li>
                            ${mineral.name} costs $ ${mineral.price}
                         </li>`  
        }
    }    
   
    html += "</ul>"
    return html
}



