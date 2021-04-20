import React, { useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";

function CreateOrderModel(props) {
    const {flights, cities, airlines} = props;
    const useAirlines=["--",...airlines];
    const useCities=['--', ...cities];
    const { toggle, modal} = props;


    const [newData, setData]= useState('')
    const [newTime, setTime]= useState('')
    const [newName, setNewName] = useState('');
    const [newDirection, setNewDirection] = useState('');



    const SearchFlight = () => {
        let newData1= newData.replace(/[-]/g,'')
        let newTime1= newTime.replace(/[:]/g,'')
        props.searchForFlight(newData1, newTime1, newName, newDirection);
        setData('');
        setTime('');
        setNewName('');
        setNewDirection('');
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} charCode='X'>Create a new client</ModalHeader>
                <ModalBody>

                    <table>
                        <tbody>
                        <tr>
                            <td>schedule Date from:</td>
                            <td><input className='input175' type="date" min="2021-04-19" max="2021-05-16" value={newData}
                                       onChange={(e) => setData(e.target.value)}/>
                            </td>

                        </tr>
                        <tr>
                            <td>schedule Time from:</td>
                            <td><input className='input175' type="time" min="00:00" max="23:59" value={newTime}
                                       onChange={(e) => setTime(e.target.value)}/>
                            </td>

                        </tr>
                        <tr>
                            <td>Flight Name:</td>
                            <td><select className="input175" value={newName}
                                        onChange={(e) => setNewName(e.target.value)} >
                                {useAirlines.map(el => <option>{el}</option>)}
                            </select>&nbsp;

                            </td>
                        </tr>
                        <tr>
                            <td>Flight Direction:</td>
                            <td><select className="input175" value={newDirection}
                                        onChange={(e) => setNewDirection(e.target.value)} >
                                {useCities.map(el => <option>{el}</option>)}
                            </select>&nbsp;

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary mr-xl-5" style={{alignSelf: "left"}} onClick={() => props.renew()}>choose from all flights</Button>
                    <Button color="primary" onClick={() => {
                        SearchFlight(newData, newTime, newName, newDirection);
                        // toggle()
                    }}>Search</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}

const mapStateToProps = (state) => ({
    flights: state.flights,
    cities: state.cities,
    airlines: state.airlines,
});

const mapDispatchToProps = (dispatch) => ({
    searchForFlight: (newData, newTime, name, direction) => dispatch({type: "SEARCH",
        payload: {data: newData, time: newTime, name: name, direction: direction}
    }),
    renew: () => dispatch({type: "RENEW", payload: {}})
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrderModel);
