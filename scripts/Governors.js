import { getGovernors, setGovernor, getOrderBuilder  } from "./database.js"

const governors = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governors" ) {
            
            setGovernor(parseInt(event.target.value))
        }
    }
)


export const Governors = () => {
    const orderBuilder = getOrderBuilder()
    let html = `<select id="governors" class="dropdown" ${ ( "selected" === true) ? `value='${governor.id}'` : "" }> 
    <option value="0"> Please select a Governor...</option>`
  
   const listItems = governors.map(governor=>{
        return `
            <option ${ (governor.id === orderBuilder.governorId) ? "selected" : "" } value="${governor.id}">${governor.name} </option>`   
     

   })

   html+= listItems.join("")
   html +="</select>"
    return html
}



