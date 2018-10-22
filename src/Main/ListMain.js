import React from 'react'
import OptionsMain from './OptionsMain'
import PropTypes from 'prop-types'


export default function ListMain (props){
    const {moveBook,filter,tryImage,tryAuthor} = props
    
    
    return(
        <ol className="books-grid">
            { filter.map((book) =>(
                <li key={book.id}> 
                    <div className="book">
                        <div className="book-top">
                            {tryImage(book)}
                            <OptionsMain shelf ={book.shelf} moveBook={(value) => moveBook(value,book)}></OptionsMain>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {tryAuthor(book)}
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





