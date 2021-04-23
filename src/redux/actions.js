import axios from 'axios';

export function getFlights(AppId, AppKey){
    return (dispatch) => {
        axios.get('https://react.galateastudio.nl/loading/flights')
            .then(res => {
                let data=[...res.data]
                dispatch({
                    type: 'GET_FLIGHTS',
                    payload: data,
                })
            })
            .catch(error => console.log('Could not get data'))
    }
}

export function updateFlightList(payload){
    return (dispatch) => {
        axios.get('https://react.galateastudio.nl/loading/flights')
            .then(res => {
                let data = res.data
                for (let i = 0; i < data.length; i++) {
                    data[i].data = data[i].data.replace(/[-]/g, '');
                    data[i].time = data[i].time.replace(/[:]/g, '');
                }
                if (payload.data !== '')
                    data = data.filter(el => Number(el.data) >= Number(payload.data));
                if (payload.time !== '')
                    data = data.filter(el => Number(el.time) >= Number(payload.time));
                if (payload.name !== '')
                    data = data.filter(el => el.name === payload.name);
                if (payload.direction !== '')
                    data = data.filter(el => el.direct === payload.direction);

                for (let i = 0; i < data.length; i++) {
                    data[i].data = data[i].data.slice(0, 4) + "-" + data[i].data.slice(4, 6) + '-' + data[i].data.slice(6);
                    data[i].time = data[i].time.slice(0, 2) + ":" + data[i].time.slice(2);
                    data[i].num = i + 1;
                }
                if (data.length === 0) alert(`We are sorry, there is no flight with this setting`)
                dispatch({
                    type: 'SEARCH',
                    payload: data,
                })
            })
            .catch(error => console.log(error))
    }
}

export function getCities(AppId, AppKey){
    return (dispatch) => {
        axios.get('https://react.galateastudio.nl/loading/cities')
            .then(res => {
                dispatch({
                    type: 'GET_CITIES',
                    payload: res.data,
                })
            })
            .catch(error => console.log('Could not get data'))
    }
}

export function getAirlines(AppId, AppKey){
    return (dispatch) => {
        axios.get('https://react.galateastudio.nl/loading/airlines')
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: 'GET_AIRLINES',
                    payload: res.data,
                })
            })
            .catch(error => console.log('Could not get data'))
    }
}
