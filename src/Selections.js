import React from 'react'
import './App.css'

function Selections (props){
    return(
        <div className="book-shelf-changer">
            <select >
                <option disabled>Move to ... </option>
                {props.situations.map((selection) => {
                    return(
                        <option key={selection.id} value={selection.id} >{selection.title}</option>
                        )
                    })
                }
                <option >None </option> {/* Colocar sem estado  ("")*/}
            </select>
        </div>
    );
}

export default Selections