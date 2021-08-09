import { getOrderBuilder } from "./database";


export const Orders = () => {

    const orders = getOrderBuilder()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}




