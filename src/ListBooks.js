import React from 'react'
import './App.css'
import Selections from './Selections'


function ListBooks (props){
    let filter = props.books.filter((f) =>{
            return f.situation === props.situation.id;
    })
    
    return(
        
        <ol className="books-grid">
            { filter.map((book) =>(
                <li key={book.id}> 
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.image})` }}></div>
                        <Selections situations={props.situations}></Selections>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                    </div>
                </li>
                ))
            }
        </ol>

    );
}

export default ListBooks