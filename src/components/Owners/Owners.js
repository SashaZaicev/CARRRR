import React from 'react'
import styles from './Owners.module.css'

let Owners = (props) => {

    return (
        <div className={styles.owner}>
            {props.clients.clients.map(i => Object.entries(i).map((key, value) =>
                <div>
                    <div>
                        <p>{key[0]+':'+ key[1]}</p>
                        </div>

                </div> ))}
        </div>)

            }
            export default Owners