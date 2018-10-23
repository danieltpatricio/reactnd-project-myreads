import React from 'react'
import OptionsBook from './OptionsBook'
import PropTypes from 'prop-types'
import * as Global from './config/Global'

export default function ListMain (props){
    const {moveBook,filter} = props
    
    return(
        <ol className="books-grid">
            { filter.map((book) =>(
                <li key={book.id}> 
                    <div className="book">
                        <div className="book-top">
                            {Global.tryImage(book)}
                            <OptionsBook typeOption="default" shelf ={book.shelf} moveBook={(event) => moveBook(event,book.id)}></OptionsBook>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {Global.tryAuthor(book)}
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





