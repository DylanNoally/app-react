import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

    state = {
        persons: []
    }

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    componentDidMount() {
        axios.get(`http://www.apitest.e-quotationmodelapp.com:59444/QM/Fichiers?ID_Soc=2`, this.headers)
            .then(res => {
              const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}

export default App;

