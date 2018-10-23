import React from 'react'
import * as Global from './config/Global'
import PropTypes from 'prop-types'

export default function OptionsBook (props){
    const {shelf,moveBook,typeOption} = props

    const optionsBook =
        <select
            value={shelf}
            className="select-search"
            onChange={(e) =>moveBook(e)}>
            <option disabled>Move to ... </option>
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
        </select>

    let divOption
    if(typeOption === 'default')
        divOption = <div className="book-shelf-changer">{optionsBook}</div>
    if(typeOption === 'list')
        divOption = <div style={{position: "absolute", right: 30}}>{optionsBook}</div>
    return(divOption)
}

OptionsBook.prototype = {
    shelf: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
    typeOption: PropTypes.array.isRequired
}