import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required} from "../utils/validators/validators";
import {Input} from "../FormsControls/FormsControls";


let Create = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <span>First Name:  </span>
                    <Field component={Input} name='firstName' placeholder={'First Name'}
                           validate={[required]}/>
                </div>
                <div>
                    <span>Last Name:  </span>
                    <Field component={Input} name='lastName' placeholder={'Last Name'}
                           validate={[required]}/>
                </div>
                <div>
                    <span>Date of Birth:  </span>
                    <Field component={Input} name='birth' placeholder={'Date of Birth'} type='date' validate={[required]}/>
                </div>
                <div>
                    <span>Address:  </span>
                    <Field component={Input} name='address' placeholder={'Address'} validate={[required]}/>
                </div>

                <div>
                    <span>Phone:  </span>
                    <Field component={Input} name='phone' placeholder={'Phone'} validate={[required]}/>
                </div>

                <div>
                    <span>Email:  </span>
                    <Field component={Input} name='email' placeholder={'Email'} validate={[required]}/>
                </div>

                <div>
                    <button>Add</button>
                </div>
            </form>
    )
}

const CreateReduxForm = reduxForm({form: 'create'})(Create)

let CreateCard = (props) => {
    let routeChange =() => {
        let path = `owner`;
        props.history.push(path);
    }

    let onAddClientCard = (formData)=>{
        props.addClientAC(formData);
        routeChange()
    }
    return (
        <div>
            <h1>Create card</h1>
            <CreateReduxForm  onSubmit={onAddClientCard}/>
        </div>
    )
}

export default CreateCard;
