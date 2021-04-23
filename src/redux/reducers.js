

const inStateTasks = {
    flights: [],
    cities: [],
    airlines: [],
}

// const setFlights = (data) =>{
//     inStateTasks.flights=data;
// }

const flightList = (state = inStateTasks, action) => {


    switch (action.type) {
        case "GET_FLIGHTS": {
            return {...state, flights: action.payload}
        }

        case "GET_CITIES": {
            return {...state, cities: action.payload}
        }

        case "GET_AIRLINES": {
            return {...state, airlines: action.payload}
        }

        case 'SEARCH': {
            return {...state, flights: action.payload};
        }
        default:
            return state;
    }
}

export default flightList;

