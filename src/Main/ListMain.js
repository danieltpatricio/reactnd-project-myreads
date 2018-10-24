import React from 'react'
import OptionsMain from './OptionsMain'
import PropTypes from 'prop-types'
import * as GLOBAL from '../config/Global'

export default function ListMain (props){
    const {moveBook,filter} = props
    
    return(
        <ol className="books-grid">
            { filter.map((book) =>(
                <li key={book.id}> 
                    <div className="book">
                        <div className="book-top">
                            {GLOBAL.tryImage(book)}
                            <OptionsMain 
                                shelf ={book.shelf} 
                                moveBook={(event) => moveBook(event,book.id)}>
                            </OptionsMain>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {GLOBAL.tryAuthor(book)}
                    </div>
                </li>
                ))
            }
        </ol>
    );
}

ListMain.prototype = {
    filter: PropTypes.func.isRequired,
    moveBook: PropTypes.func.isRequired
}





