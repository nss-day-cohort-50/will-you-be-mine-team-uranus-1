import { getColonies, getColonyQuantities, getGovernors, getMinerals, getOrderBuilder } from "./database.js"


const colonies = getColonies()
const colonyMinerals = getColonyQuantities()
const minerals = getMinerals()
const governors = getGovernors()



export const ColonyQuantities = () => {
    const state = getOrderBuilder()


            const ColonyObjects = governors.filter(colonyObject => state.governorId === colonyObject.governorId)
            const arrayMatchedColonies = ColonyObjects.map(ColonyObject => {
                const MatchedColonyObject = colonyMinerals.find(colonyMineral => colonies.id === colonyMineral.colonylId)
                const MatchedColonyMineralObject = minerals.find(matchedMineral => MatchedColonyObject.mineralId === matchedMineral.id)
                return `<ul>
        <li id="${MatchedColonyObject.id}" type="radio">${ColonyObject.name} has ${MatchedColonyObject.quantity} of ${MatchedColonyMineralObject.name} </li>
        </ul>`
            }).join("")

            return arrayMatchedColonies
        }

// )











