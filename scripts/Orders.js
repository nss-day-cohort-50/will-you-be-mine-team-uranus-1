import { getOrderBuilder, getMinerals } from "./database.js";

const currentOrder = getOrderBuilder()
const minerals = getMinerals()

const buildOrderListItem = (order) => {
    if( minerals.id===order.mineralPurchaseId){
        return `<li>${minerals.name}</li>`}
}   

export const Orders = () => {
    let html = "<ul>"
    const listItems = currentOrder.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}