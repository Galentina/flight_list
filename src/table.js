import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {connect} from "react-redux";


function Table (props){
    const {flight} = props;

    return (
        <tr>
            <td>{flight.num}</td>
            <td>{flight.data}</td>
            <td>{flight.time}</td>
            <td>{flight.name}</td>
            <td>{flight.direct}</td>
        </tr>

    );
}
const mapStateToProps = (state) => ({
    flights: state.flights
})

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Table);
