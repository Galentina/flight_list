// eslint-disable-next-line no-unused-vars
import React from 'react';
import {v4 as uuid4v} from 'uuid';


const inStateTasks = {
    flights:  [
        {id: uuid4v(), data: "2021-04-19", time: "01:22", name: 'EasyJet', direct: "London", num:1},
        {id: uuid4v(), data: "2021-04-19", time: "04:22", name: 'EasyJet', direct: "Paris", num:2},
        {id: uuid4v(), data: "2021-04-19", time: "03:22", name: 'Ryanair', direct: "Milan", num:3},
        {id: uuid4v(), data: "2021-04-20", time: "05:30", name: 'Aeroflot', direct: "Moscow", num:4},
        {id: uuid4v(), data: "2021-04-20", time: "07:30", name: 'Aeroflot', direct: "Prague", num:5},
        {id: uuid4v(), data: "2021-04-20", time: "08:20", name: 'KLM', direct: "Rom", num:6},
        {id: uuid4v(), data: "2021-04-21", time: "10:55", name: 'EasyJet', direct: "London", num:7},
        {id: uuid4v(), data: "2021-04-21", time: "14:55", name: 'EasyJet', direct: "Madrid", num:8},
        {id: uuid4v(), data: "2021-04-21", time: "15:50", name: 'Alitalia', direct: "Rom", num:9},
        {id: uuid4v(), data: "2021-04-21", time: "16:50", name: 'Ryanair', direct: "Milan", num:10},
        {id: uuid4v(), data: "2021-04-22", time: "10:30", name: 'Aeroflot', direct: "Berlin", num:11},
        {id: uuid4v(), data: "2021-04-22", time: "11:30", name: 'Aeroflot', direct: "Moscow", num:12},
        {id: uuid4v(), data: "2021-04-22", time: "12:45", name: 'KLM', direct: "Rom", num:13},
        {id: uuid4v(), data: "2021-04-23", time: "10:30", name: 'EasyJet', direct: "Madrid", num:14},
        {id: uuid4v(), data: "2021-04-23", time: "19:30", name: 'EasyJet', direct: "London", num:15},
        {id: uuid4v(), data: "2021-04-23", time: "21:10", name: 'Ryanair', direct: "Milan", num:16},
        {id: uuid4v(), data: "2021-04-24", time: "10:30", name: 'Alitalia', direct: "Madrid", num:17},
        {id: uuid4v(), data: "2021-04-24", time: "19:30", name: 'EasyJet', direct: "Rom", num:18},
        {id: uuid4v(), data: "2021-04-24", time: "21:10", name: 'Ryanair', direct: "Prague", num:19},
        {id: uuid4v(), data: "2021-04-25", time: "08:10", name: 'Ryanair', direct: "Milan", num:20},
        {id: uuid4v(), data: "2021-04-25", time: "15:45", name: 'Aeroflot', direct: "Moscow", num:21},
        {id: uuid4v(), data: "2021-04-25", time: "20:20", name: 'KLM', direct: "Rom", num:22},
        {id: uuid4v(), data: "2021-04-26", time: "08:10", name: 'Ryanair', direct: "Milan", num:23},
        {id: uuid4v(), data: "2021-04-26", time: "15:45", name: 'Aeroflot', direct: "Moscow", num:24},
        {id: uuid4v(), data: "2021-04-27", time: "07:20", name: 'KLM', direct: "Madrid", num:25},
        {id: uuid4v(), data: "2021-04-27", time: "18:20", name: 'KLM', direct: "Rom", num:26},
        {id: uuid4v(), data: "2021-04-28", time: "08:10", name: 'Ryanair', direct: "Milan", num:27},
        {id: uuid4v(), data: "2021-04-28", time: "15:45", name: 'Aeroflot', direct: "Moscow", num:28},
        {id: uuid4v(), data: "2021-04-29", time: "07:20", name: 'KLM', direct: "Madrid", num:29},
        {id: uuid4v(), data: "2021-04-29", time: "18:20", name: 'Alitalia', direct: "Rom", num:30},
        {id: uuid4v(), data: "2021-04-30", time: "07:45", name: 'Aeroflot', direct: "Moscow", num:31},
        {id: uuid4v(), data: "2021-04-30", time: "15:20", name: 'KLM', direct: "Madrid", num:32},
        {id: uuid4v(), data: "2021-04-30", time: "18:20", name: 'Alitalia', direct: "Rom", num:33},
        {id: uuid4v(), data: "2021-05-01", time: "01:22", name: 'EasyJet', direct: "London", num:34},
        {id: uuid4v(), data: "2021-05-01", time: "04:22", name: 'EasyJet', direct: "Paris", num:35},
        {id: uuid4v(), data: "2021-05-01", time: "03:22", name: 'Ryanair', direct: "Milan", num:36},
        {id: uuid4v(), data: "2021-05-02", time: "05:30", name: 'Aeroflot', direct: "Moscow", num:37},
        {id: uuid4v(), data: "2021-05-02", time: "07:30", name: 'Aeroflot', direct: "Prague", num:38},
        {id: uuid4v(), data: "021-05-02", time: "08:20", name: 'KLM', direct: "Rom", num:39},
        {id: uuid4v(), data: "021-05-02", time: "10:55", name: 'EasyJet', direct: "London", num:40},
        {id: uuid4v(), data: "2021-05-03", time: "14:55", name: 'EasyJet', direct: "Madrid", num:41},
        {id: uuid4v(), data: "2021-05-03", time: "15:50", name: 'Alitalia', direct: "Rom", num:42},
        {id: uuid4v(), data: "2021-05-03", time: "16:50", name: 'Ryanair', direct: "Milan", num:43},
        {id: uuid4v(), data: "2021-05-04", time: "10:30", name: 'Aeroflot', direct: "Berlin", num:44},
        {id: uuid4v(), data: "2021-05-04", time: "11:30", name: 'Aeroflot', direct: "Moscow", num:45},
        {id: uuid4v(), data: "2021-05-04", time: "12:45", name: 'KLM', direct: "Rom", num:46},
        {id: uuid4v(), data: "2021-05-05", time: "10:30", name: 'EasyJet', direct: "Madrid", num:47},
        {id: uuid4v(), data: "2021-05-05", time: "19:30", name: 'EasyJet', direct: "London", num:48},
        {id: uuid4v(), data: "2021-05-05", time: "21:10", name: 'Ryanair', direct: "Milan", num:49},
        {id: uuid4v(), data: "2021-05-06", time: "10:30", name: 'Alitalia', direct: "Madrid", num:50},
        {id: uuid4v(), data: "2021-05-06", time: "19:30", name: 'EasyJet', direct: "Berlin", num:51},
        {id: uuid4v(), data: "2021-05-07", time: "21:10", name: 'Ryanair', direct: "Prague", num:52},
        {id: uuid4v(), data: "2021-05-08", time: "08:10", name: 'Ryanair', direct: "Milan", num:53},
        {id: uuid4v(), data: "2021-05-09", time: "15:45", name: 'Aeroflot', direct: "Moscow", num:54},
        {id: uuid4v(), data: "2021-05-09", time: "20:20", name: 'KLM', direct: "Rom", num:55},
        {id: uuid4v(), data: "2021-05-10", time: "08:10", name: 'Ryanair', direct: "Prague", num:56},
        {id: uuid4v(), data: "2021-05-10", time: "15:45", name: 'Aeroflot', direct: "Moscow", num:57},
        {id: uuid4v(), data: "2021-05-11", time: "07:20", name: 'KLM', direct: "Madrid", num:58},
        {id: uuid4v(), data: "2021-05-12", time: "18:20", name: 'KLM', direct: "Rom", num:59},
        {id: uuid4v(), data: "2021-05-13", time: "08:10", name: 'Ryanair', direct: "Milan", num:60},
        {id: uuid4v(), data: "2021-05-14", time: "15:45", name: 'Aeroflot', direct: "Prague", num:61},
        {id: uuid4v(), data: "2021-05-15", time: "07:20", name: 'KLM', direct: "Madrid", num:62},
        {id: uuid4v(), data: "2021-05-15", time: "18:20", name: 'KLM', direct: "Berlin", num:63},
        {id: uuid4v(), data: "2021-05-16", time: "08:10", name: 'Ryanair', direct: "Milan", num:64},
        {id: uuid4v(), data: "2021-05-16", time: "15:45", name: 'Aeroflot', direct: "Moscow", num:65},
    ],
    cities: ["Berlin", "London", "Madrid", "Milan", "Moscow", "Paris", "Rom", "Prague"],
    airlines: ['Aeroflot', 'Alitalia', 'EasyJet', 'KLM', 'Ryanair', ],
    statuses: [{}],
}

const flightList = (state = inStateTasks, action) => {


    switch (action.type) {
        case 'SEARCH': {
            let newFlights = [...state.flights]
            for (let i = 0; i < newFlights.length; i++) {
                newFlights[i].data = newFlights[i].data.replace(/[-]/g, '');
                newFlights[i].time = newFlights[i].time.replace(/[:]/g, '');
            }
            console.log(newFlights)
            if (action.payload.data !== '')
                newFlights = newFlights.filter(el => Number(el.data) >= Number(action.payload.data));
            if (action.payload.time !== '')
                newFlights = newFlights.filter(el => Number(el.time) >= Number(action.payload.time));
            if (action.payload.name !== '')
                newFlights = newFlights.filter(el => el.name === action.payload.name);
            if (action.payload.direction !== '')
                newFlights = newFlights.filter(el => el.direct === action.payload.direction);

            for (let i = 0; i < newFlights.length; i++) {
                newFlights[i].data = newFlights[i].data.slice(0, 4) + "-" + newFlights[i].data.slice(4, 6) + '-' + newFlights[i].data.slice(6);
                newFlights[i].time = newFlights[i].time.slice(0, 2) + ":" + newFlights[i].time.slice(2);
                newFlights[i].num=i+1;
            }
            if (newFlights.length===0) alert(`We are sorry, there is no flight with this setting`)
            console.log(newFlights);
            return {...state, flights: newFlights};

        }

        case "RENEW": {
            let newFlights = [...inStateTasks.flights]
            for (let i = 0; i < newFlights.length; i++) {
                newFlights[i].data = newFlights[i].data.replace(/[-]/g, '');
                newFlights[i].time = newFlights[i].time.replace(/[:]/g, '');
                newFlights[i].data = newFlights[i].data.slice(0, 4) + "-" + newFlights[i].data.slice(4, 6) + '-' + newFlights[i].data.slice(6);
                newFlights[i].time = newFlights[i].time.slice(0, 2) + ":" + newFlights[i].time.slice(2);
                newFlights[i].num=i+1;
            }

            return {...state, flights: inStateTasks.flights};
        }

        // case "GET_STATUSES":
        //     console.log(action.payload)
        //     return {...state, statuses: action.payload}

        default:
            return state;
    }
}

export default flightList;

