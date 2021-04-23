import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {connect} from "react-redux";
import Table from "./table";

function FlightsLoading(props) {
    const {flights} = props;

    return (
        <tbody>
            {flights.map((el,i)=> <Table key={i} flight={el} id={el.id} />)}
        </tbody>
    )
}
const mapStateToProps = () => ({

})
const mapDispatchToProps = (dispatch) => ({
    renew: () => dispatch({type: "RENEW", payload: {}}),


})

export default connect(mapStateToProps, mapDispatchToProps)(FlightsLoading);
