import React from 'react'
import styles from './ListCars.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {required} from "../utils/validators/validators";

let ListCars = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <span>Date:  </span>
                <Field component={Input}
                       type='datetime-local'
                       name='date'
                       validate={[required]}/>
            </div>
            <div>
                <span>Order Amount:  </span>
                <Field component={Input}
                       name='amount'
                       placeholder='Order Amount'
                       type='number'
                       min='0'
                       max='10000'
                       validate={[required]}/> $
            </div>
            <div>
                <span>Order Status:  </span>
                <Field component={Input}
                       name='status'
                       placeholder='Order Status'
                       type='text'
                       autocomplete="on"
                       validate={[required]}
                />

            </div>
            <div>
                <button>Add</button>
                <button type="button" onClick={props.reset}>Delete</button>
            </div>
        </form>
    )
}

const ListReduxForm = reduxForm({form: 'list'})(ListCars)


let List = (props) => {

    let onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={styles.clients}>
            <ListReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default List;
