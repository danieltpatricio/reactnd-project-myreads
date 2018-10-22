import React from 'react'
import Shelfs  from '../config/Shelfs'
import PropTypes from 'prop-types'


export default function OptionsBooks (props){
    const {shelf,moveBook} = props
    
        return( 
            <div className="book-shelf-changer">
                <select value={shelf} 
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
        );
}

OptionsBooks.prototype = {
    shelf: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}
