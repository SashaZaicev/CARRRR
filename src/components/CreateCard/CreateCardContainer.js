import React, {Component} from 'react'

import {connect} from "react-redux";
import CreateCard from "./CreateCard";
import {addClientAC} from "../store/client-reducer";
import NameSurname from "../NameSurname/NameSurname";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class CreateCardContainer extends React.Component {
    render() {
        return(
            <div>
            <NameSurname/>
        <CreateCard {...this.props} />
            </div>
        )
    }
}
let mstp = (state) =>{
    return{
       clients: state.clients
    }
}
export default compose( connect(mstp,{addClientAC}),withRouter)(CreateCardContainer)

