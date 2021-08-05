import { getGovernors } from "./database.js"

const governors = getGovernors()


// 

export const Governors = () => {
    let html = `<div class='dropdown'>
    <button onclick="myFunction()" class="dropbtn">Governors</button>
    <div id="myDropdown" class="dropdown-content">`

    // This is how you have been converting objects to <li> elements
   const divs = governors.map(governor=>{
        return `
            <div>
                <input type="checkbox" id="${governor.id}" name="governor"checked>
                <label for="governor-name">${governor.name}</label>
            </div>`



   })

   html+= divs.join("")
   html +="</div>"
    return html
}






