import React from 'react'
import styles from './Clients.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {addModelAC} from "../store/client-reducer";

let Clients = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
            <div>
                <span>Make:  </span>
                <Field component={Input} name= 'make' placeholder='Make' validate={[required]}/>
            </div>
            <div>
                <span>Model:  </span>
                <Field component={Input} name= 'model' placeholder='Model' validate={[required]}/>
            </div>
            <div>
                <span>Year:  </span>
                <Field component={Input} name='year' placeholder={'Year'} validate={[required]}/>
            </div>
            <div>
                <span>Vin:  </span>
                <Field component={Input} name='vin' placeholder='Vin' validate={[required]}/>
            </div>
            <div>

                <button>Add</button>
                <button type="button" onClick={props.reset}>Delete</button>

            </div>
            </form>
    )
}

const ClientsReduxForm = reduxForm({form: 'clients'})(Clients)

let ClientsData = (props) => {
    let onSubmit = (infoData)=>{
        props.addModelAC(infoData)
    }

    return (
        <div className={styles.clients}>
            <ClientsReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default ClientsData;
