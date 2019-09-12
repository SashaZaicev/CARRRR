import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import NameSurname from "./components/NameSurname/NameSurname";
import Create from "./components/CreateCard/CreateCard";
import Clients from './components/ClientsData/ClientsData'
import List from "./components/ListCars/ListCars";
import CreateCardContainer from "./components/CreateCard/CreateCardContainer";
import OwnersContainer from "./components/Owners/OwnersContainer";
import ClientsDataContainer from "./components/ClientsData/ClientsDataContainer";


let App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path='/client' render={()=><ClientsDataContainer/>}/>
                <Route path='/list' render={()=><List/>}/>
                <Route path='/name' render={()=><CreateCardContainer/>}/>
                <Route path='/owner' render={()=><OwnersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
