import React, {Component} from 'react'
import styles from './button.module.css'

function OkButton () {
   
    return (
        <div>
            <button
            className={styles.plotcontainer}
            onClick={() => alert('Welcome to the button')}>Plot </button>
               
        </div>

    )
       
    
}

export default OkButton