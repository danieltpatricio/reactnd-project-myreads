import React from 'react'
import * as Global from '../config/Global'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem  from '@material-ui/core/MenuItem';

export default function OptionsSearch (props){
    const {shelf,moveBook} = props
    
    return(
        <div style={{position: "absolute", right: 30}}>
            <Select
                value={shelf}
                onChange={(e) =>moveBook(e)}>
                <MenuItem disabled>Move to ...</MenuItem>
                {Global.SHELFS.map((shelf) => {
                    return(
                        <MenuItem
                            key={shelf.id} 
                            value={shelf.id}>
                            {shelf.title}</MenuItem>
                        )
                    })
                }
                <MenuItem value="none" key="none" >None</MenuItem>
            </Select>
        </div>
    
    )
}

OptionsSearch.prototype = {
    shelf: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}