import React from 'react'
import * as Global from '../config/Global'
import PropTypes from 'prop-types'

export default function OptionsMain (props){
    const {shelf,moveBook} = props
    return(
        <div className="book-shelf-changer">
            <select
                value={shelf}
                onChange={(e) =>moveBook(e)}>
                <optgroup label="Move to ...">
                    {Global.SHELFS.map((shelf) => {
                            return(
                                <option 
                                    key={shelf.id} 
                                    value={shelf.id}>
                                    {shelf.title}</option>
                                )
                            })
                        }
                        <option value="none" key="none" >None</option>
                </optgroup>    
            </select>
        </div>
    
    )
}

OptionsMain.prototype = {
    shelf: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}