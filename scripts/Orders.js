import { getMinerals, getOrderBuilder } from "./database";




const buildOrderListItem = () => {
    
    const minerals = getMinerals()
    const foundMinerals = minerals.find(
        (mineral) => { return mineral.id === order.mineralId}
    )
        return `<li>
            ${order.quantity} ton of ${order.name} from...
        </li>`
    }


export const Orders = () => {

    const orders = getOrderBuilder()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}




