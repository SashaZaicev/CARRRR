import React, {Component} from 'react'
import styles from './Owners.module.css'
import Owners from "./Owners";
import {connect} from "react-redux";

class OwnersContainer extends React.Component {
    render() {
        return (
           <Owners {...this.props} />
        )
    }
}

const mstp = (state) =>{
    return{
        clients: state.clients

    }
}

export default connect (mstp,{}) (OwnersContainer)