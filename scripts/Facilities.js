import {getFacilities, setFacility, getMinerals, getFacilityQuantities, getOrderBuilder } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const facilityQuantities = getFacilityQuantities()



document.addEventListener(
    "click",
    (event) => { 
        const mineralContainer = document.querySelector(".mineral--options")
        for (const quantity of facilityQuantities) {
            if ( parseInt(event.target.id) === quantity.facilityId) {
                mineralContainer.innerHTML += mineralButtons()
                setFacility(parseInt(event.target.value))
            }
        }                  
    }       
)


const mineralButtons = () => {
    const state = getOrderBuilder()
    let html ="<ul>"
    for (const quantity of facilityQuantities) {
        if (state.facilityId === quantity.facilityId) {
            const mineral = minerals.find(mineral => mineral.id === quantity.mineralId)  
                html += `<li>
                            <input type ="checkbox" name="mineral" value="${mineral.id}"> ${mineral.name} </input>  
                         </li>`  
        }
    }    
   
    html += "</ul>"
        return html
}




// // this window alert works

// document.addEventListener(
//     "click",
//     (event) => { 
//         // const mineralContainer = document.querySelector(".mineral--options")
//         for (const quantity of facilityQuantities) {
        
//             if ( parseInt(event.target.id) === quantity.facilityId) {
//                 const mineral = minerals.find(mineral => mineral.id === quantity.mineralId)
//                 window.alert(`${mineral.name}.`)
//             }
//         }
//     }                        
// )




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

















// const mineralButtons = () => {
    
//     let html ="<ul>"
//         for (const quantity of facilityQuantities) {
//             for (const mineral of minerals) {
//                 if (quantity.mineralId === mineral.id ) {
//                         html += `<li>
//                                     <input type ="checkbox" name="mineral" value="${mineral.id}"> ${mineral.name} </input>  
//                                  </li>`   
//                 }    
//             }   
        
//         }
//     html += "</ul>"
//         return html
// }






// document.addEventListener(
//     "click",
//     (event) => { 
//         const mineralContainer = document.querySelector(".mineral--options")
//         for (const quantity of facilityQuantities) {
        
//             if ( parseInt(event.target.id) === quantity.facilityId) {

//                 mineralContainer.innerHTML += mineralButtons()
        
//             }
//         } 
//     }                       
// )






// this windoe alert works

// document.addEventListener(
//     "click",
//     (event) => { 
//         // const mineralContainer = document.querySelector(".mineral--options")
//         let html ="<ul>"
//         for (const quantity of facilityQuantities) {
        
//             if ( parseInt(event.target.id) === quantity.facilityId) {
//                 const mineral = minerals.find(mineral => mineral.id === quantity.mineralId)
//                 html += `<li>
//                             <input type ="checkbox" name="mineral" value="${mineral.id}"> ${mineral.name} </input>  
//                         </li>`   
//             }    
                   
//         html += "</ul>"
//         return html
//         }
//     }
// )











// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("facility")) {
//             const [, facilityId] = itemClicked.id.split("--")

//             for (const pet of pets) {
//                 if ( pet.id === parseInt(petId)) {


//                     const walker = walkers.find(walker => walker.id === pet.walkerId)


//                     window.alert(`${mineral.name}.`)
//                 }
//             }
//         }
//     }
// )

















// document.addEventListener(
//     "click",
//     (event) => { 
//         // const mineralContainer = document.querySelector(".mineral--options")
//         for (const quantity of facilityQuantities) {
//                 if ( parseInt(event.target.id) === quantity.facilityId && quantity.mineralId === minerals.id) {
//                     html += `<li>
//                     <input type ="checkbox" name="mineral" value="${minerals.id}"> ${minerals.name} </input>  
//                  </li>`   
//                 }     

//         }
//         html += "</ul>"
//         return html 
//     } 
// )


// const mineralButtons = () => {
    
//     let html ="<ul>"
//         for (const quantity of facilityQuantities) {
//             for (const mineral of minerals) {
//                 if (quantity.mineralId === mineral.id ) {
//                         html += `<li>
//                                     <input type ="checkbox" name="mineral" value="${mineral.id}"> ${mineral.name} </input>  
//                                  </li>`   
//                 }    
//             }   
        
//         }
//     html += "</ul>"
//         return html
// }

















