import { getOrderBuilder, getMinerals } from "./database.js"
// import { getFacilities, getFacilityQuantities, getColonyQuantities } from "./database.js"



const minerals = getMinerals()
// const facilities = getFacilities()
// const facilityQuantities = getFacilityQuantities()
// const colonyQuantities = getColonyQuantities()



// export const ChosenMinerals = () => {
//     const state = getOrderBuilder()
//     let html ="<ul>"
//     const listItems = orders.map(buildOrderListItem)
    
//         html += listItems.join("")
//         html += "</ul>"
    
//         return html
//     }



// const buildOrderListItem = (order) => {

    
//     const foundMineral = minerals.find(
//         (mineral) => {
//             return mineral.id === order.mineralId
//         }
//     )

//     const foundFacility = facilities.find(
//         (facility) => {
//             return facility.id === order.facilityId
//         }
//     )

//     const foundStyle = styles.find(
//         (style) => {
//             return style.id === order.styleId
//         }
//     )

//     const foundType = types.find(
//         (type) => {
//             return type.id === order.typeId
//         }
//     )

//     const totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * foundType.price

     
//     const costString = totalCost.toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD"
//     })
    
//     return `<li>
//         Order #${order.id} cost ${costString}
//     </li>`


// }


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




// export const ChosenMinerals = () => {
//     const state = getOrderBuilder()
//     const mineralFacilityObjects = mineralFacilities.filter(mineralFacilityObject => state.facilityId === mineralFacilityObject.facilityId)
//     const arrayMatchedItems = mineralFacilityObjects.map(mineralFacilityObject => {
//     const MatchedMineralObject = minerals.find(mineral => mineral.id === mineralFacilityObject.mineralId)    
//         return `<div>
//              <input type="radio">${mineralFacilityObject.quantity} ${MatchedMineralObject.name}
//         </div>` 
//     }).join("")

//     return arrayMatchedItems
// }