import React from 'react'
import styles from './NameSurname.module.css'
import CreateCard from "../CreateCard/CreateCard";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {required} from "../utils/validators/validators";

let Name = (props) => {
        return (
        <form onSubmit={props.handleSubmit}>
            <div><span>Name:  </span>
                <Field component={Input} validate={[required]}
                       name='name' placeholder='Name'/>
            </div>
            <div>
                <span>Surname:  </span>
                <Field component={Input} validate={[required]}
                       name='surname'
                    placeholder='Surname'/>
            </div>
            <div>
                <button onClick={Check}>Check</button>
            </div>
        </form>
    )
}

const CreateReduxForm = reduxForm({form: 'find'})(Name)

let NameSurname = (props) => {

    let onSubmit = (findData) =>{

    }

    return (
        <div className={styles.nameSurname}>
            <CreateReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default NameSurname;