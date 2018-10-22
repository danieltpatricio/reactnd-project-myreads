import React from 'react'
import Shelfs from '../config/Shelfs'
import PropTypes from 'prop-types'

export default function OptionsSearch (props){
    const {shelf,moveBook} = props

    return(
        <div style={{position: "absolute", right: 30}}> 
            <select value={shelf}
                    className="select-search"
                    onChange={(e) =>moveBook(e.target.value)}>
                <option disabled>Move to ... </option>
                    {Shelfs.map((shelf) => {
                        return(
                            <option 
                                key={shelf.id} 
                                value={shelf.id}>
                                {shelf.title}</option>
                            )
                        })

                    }
                <option value="none" key="none" >None</option>
            </select>
        </div>
    )
    
}

OptionsSearch.prototype = {
    shelf: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}