import React from 'react'
import OptionsMain from './OptionsMain'
import PropTypes from 'prop-types'


export default function ListMain (props){
    const {moveBook,filter} = props
    
    
    return(
        <ol className="books-grid">
            { filter.map((book) =>(
                <li key={book.id}> 
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <OptionsMain shelf ={book.shelf} moveBook={(value) => moveBook(value,book)}></OptionsMain>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map ((author)=>{
                            return <div key={author} className="book-authors">{author}</div>
                        })
                        }
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





