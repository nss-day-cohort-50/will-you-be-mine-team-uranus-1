

const database = {

    orderBuilder: {},

    minerals: [
        {id: 1, name: "Zinc", price: 3.50},
        {id: 2, name: "Gold", price: 10},
        {id: 3, name: "Salt", price: 1.27 },
        {id: 4, name: "Iron", price: 7}
    ],

    governors: [
        {id: 1, name: "Dianemarie Hartness", active: true, colonyId: 1},
        {id: 2, name: "Wilber Storm", active: true, colonyId: 2},
        {id: 3, name: "Rebecca Marion", active: true, colonyId: 3},
        {id: 4, name: "Billy Avon", active: true, colonyId: 4 }
    ],

    colonies: [
        {id: 1, name: "Mansfield Uranus"},
        {id: 2, name: "Womansfield Uranus"},
        {id: 3, name: "Up Uranus"},
        {id: 4, name: "Washington D.C."}
    ],

    facilities: [
        {id: 1, name: "Mansfield Uranus Facility", mineralId: 3, active: true },
        {id: 2, name: "Womansfield Uranus", mineralId: 2, active: true },
        {id: 3, name: "Up Uranus", mineralId: 1, active: true },
        {id: 4, name: "Washington D.C.", mineralId: 4, active: true},
        {id: 5, name: "Womansfield Uranus", mineralId: 3, active: false }
    ],

    colonyQuantities: [
        {id: 1, colonyId: 1, mineralId: 2, quantity: 10},
        { id: 2, colonyId: 2, mineralId: 3, quantity: 20},
        {id: 3, colonyId: 3, mineralId: 4, quantity: 7},
        {id: 4, colonyId: 4, mineralId: 1, quantity: 15}
    ],

    facilityQuantities: [
        {id: 1, facilityId: 1, mineralId: 2, quantity: 10},
        {id: 2, facilityId: 2, mineralId: 3, quantity: 20},
        {id: 3, facilityId: 3, mineralId: 4, quantity: 7},
        {id: 4, facilityId: 4, mineralId: 1, quantity: 15},
        {id: 5, facilityId: 4, mineralId: 2, quantity: 15}
    ]

}


export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getColonyQuantities = () => {
    return database.colonyQuantities.map(colonyQuantity => ({ ...colonyQuantity }))
}

export const getOrderBuilder = () => {
    return {...database.orderBuilder}
}
export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}

export const getFacilityQuantities = () => {
    return database.facilityQuantities.map(facilityQuantitiy => ({ ...facilityQuantitiy }))
}

export const setGovernor = (id) => {
    database.orderBuilder.governorId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setFacility = (id) => {
    database.orderBuilder.facilityId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}
    // Add a new primary key to the obje
    if (database.customOrders.length === 0){
        newOrder.id =1
    }
    else {
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    }
    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // totalCost= database.orderBuilder.sizePrice + database.orderBuilder.metalPrice + database.orderBuilder.stylePrice

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
