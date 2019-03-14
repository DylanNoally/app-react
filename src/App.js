import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    state = {
        // Déclaration d'un tableau pour y stocker les "applications" que retourne l'API
        lesApps: []
    }

    // Header conseillé pour des requêtes API retournant du JSON
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    componentDidMount() {
        // URL pour consommer l'API en y ajoutant le header précédemment déclarer
        axios.get(`VOTRE_URL`, this.headers)
            .then(res => {
                // Déclaration d'une constante pour récupérer toutes les applications (tableau de sous-niveau) du JSON
              const lesApps = res.data.lesApplications;
              console.log(lesApps);
                this.setState({ lesApps });
            })
    }

    render() {
        return (
            /* Retourne le résultat sous forme de liste avec "uneApp" qui aura l'équivalent d'une clé pour un foreach(uneApp in lesApps) */
            <ul>
                { this.state.lesApps.map(function (uneApp, i) { return <li key={i}>N°{uneApp.id} - {uneApp.libelle} - Type : {uneApp.type} - Catégorie : {uneApp.categorie} - Statut : {uneApp.statut}</li> })}
            </ul>
        )
    }
}

export default App;

