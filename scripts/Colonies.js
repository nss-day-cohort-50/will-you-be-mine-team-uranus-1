import { getColonies, getGovernors, getOrderBuilder } from "./database.js"

// We want to find the governor that has the same id as the transient state govId
// We want to find the Colony that matches the FOUND Governors Colony ID
// Then we want to make a HTML String from that Colony

const colonies = getColonies()
const governors = getGovernors()

export const GovornorColony = () => {
    let state = getOrderBuilder()
    if (state.governorId !== undefined) {
        const foundGovernor = governors.find(governor => governor.id === state.governorId)
        const foundColony = colonies.find(colony => colony.id === foundGovernor.colonyId)
        return `<ul>
        <li> ${foundColony.name}</li>
    </ul>`
    }
}



