import React, {Component} from 'react'
import {connect} from "react-redux";
import {addModelAC} from "../store/client-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import ClientsData from "./ClientsData";


class ClientsDataContainer extends React.Component {
    render() {
        return(
            <div>
        <ClientsData {...this.props} />
            </div>
        )
    }
}
let mstp = (state) =>{
    return{
       clients: state.clients.models
    }
}
export default compose( connect(mstp,{addModelAC}),withRouter)(ClientsDataContainer)

