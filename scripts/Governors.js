import { getGovernors, setGovernor, getOrderBuilder  } from "./database.js"

const governors = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.value !== 0 && event.target.checked === true) {

            setGovernor(parseInt(event.target.value))
        }
    }
)


export const Governors = () => {
    const orderBuilder = getOrderBuilder()
    let html = `<select  class="dropdown"> 
    <option value="0">Please select a Governor...</option>`
    // <button class="dropbtn">${ (governor.id === orderBuilder.governorId) ? ${governor.name} : "Governors" }</button>`

    // This is how you have been converting objects to <li> elements
   const listItems = governors.map(governor=>{
        return `
        <li class="dropdown-content">
            <option ${ (governor.id === orderBuilder.governorId) ? "checked" : "" }  name="governor" value="${governor.id}">${governor.name}</input>   
        </li>`

   })

   html+= listItems.join("")
   html +="</select>"
    return html
}




/* <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>







document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "yearSelection") {
            if (event.target.value === "allYears") {
                setChosenYear(1)
            } else if (event.target.value === "2021") {
                setChosenYear(1609480800)
            } else if (event.target.value === "2020") {
                setChosenYear(1577858400)
            } else if (event.target.value === "2019") {
                setChosenYear(1546322400)
            } else if (event.target.value === "2018") {
                setChosenYear(1514786400)
            } else if (event.target.value === "2017") {
                setChosenYear(1483250400)
            }
        }
    }
)
const yearsDropdown = () => {
    return `
    <div class="footer__item">
    Post since <select id="yearSelection">
    <option name="yearSelection" value="allYears">Display All</option>
    <option name="yearSelection" value="2021">2021</option>
    <option name="yearSelection" value="2020">2020</option>
    <option name="yearSelection" value="2019">2019</option>
    <option name="yearSelection" value="2018">2018</option>
    <option name="yearSelection" value="2017">2017</option>
    </select>
    </div>
    `;
};
//This is from the Posts by User fliter.
document.addEventListener(
    "change",
    (event) => {
        const users = getUsers()
        if (event.target.id === "userSelection") {
            const [, selectedUserId] = event.target.value.split("--")
            setChosenUser(parseInt(selectedUserId))
        }
    }
)





<input type="checkbox" id="${governor.id}" name="governor"checked>
<label for="governor-name">${governor.name}</label>
 */




