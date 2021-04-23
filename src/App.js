import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {connect} from "react-redux";
import CreateOrderModel from "./CreateOrederModel";
import FlightLoading from "./FlightLoading";
import Pagination from "./pagination";
import {getCities, getFlights, getAirlines} from './redux/actions'




function App(props) {
    const {flights} = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [currentPage, setCurrentPage]=useState(1);
    const [flightPerPage, setFlightPerPage]=useState(15);

    useEffect(() =>{props.getFlightsList(); props.getCitiesList(); props.getAirlineList()}, [])

    const update=()=>{
        props.getFlightsList();
    }
    const indexOfLastFlight = currentPage * flightPerPage;
    const indexOfFirstFlight = indexOfLastFlight - flightPerPage;

    const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight)
console.log(currentFlights)
    const paginate = (num) => setCurrentPage(num);

    return (
        <div className="App">
            <h1>Search for flight</h1>

            <hr/>

            <button type="button"  className="btn btn-primary mr-xl-5" onClick={() => {
                setModal(!modal);
                setCurrentPage(1)
            }} data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                Search for flights
            </button>{' '}
            <button type="button"  className="btn btn-primary" onClick={() => {
                update(); setCurrentPage(1)
            }} >
                Show all flights
            </button>
            <CreateOrderModel modal={modal} toggle={toggle} paginate={paginate}/>
            <hr/>
            <table className="table" style={{width: '70%', margin: "auto"}}>
                <thead>
                <tr className="table-primary">
                    <th scope="col">Number</th>
                    <th scope="col">Flight departure day</th>
                    <th scope="col">Flight departure time</th>
                    <th scope="col">Flight Name</th>
                    <th scope="col">Flight Direction</th>
                </tr>

                </thead>
                <FlightLoading flights={currentFlights} />
            </table>
            <Pagination flightPerPage={flightPerPage} totalFlight={flights.length} paginate={paginate}/>
            <p style={{fontSize: '12px', marginTop: '50px'}}>Developer: Galina Malareva, 2021-04-20</p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    flights: state.flights,
    cities: state.cities,
    airlines: state.airlines,
})
const mapDispatchToProps = (dispatch) => ({
    getFlightsList: () => dispatch(getFlights()),
    getCitiesList: () => dispatch(getCities()),
    getAirlineList: () => dispatch(getAirlines())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
