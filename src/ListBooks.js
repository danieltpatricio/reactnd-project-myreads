import React from 'react'
import './App.css'
import OptionsBooks from './OptionsBooks'


export default function ListBooks (props){
    const {books,moveBook,shelf} = props
    
    let filter = books.filter((c) =>{
            return c.shelf === shelf;
    })
    
    return(
        <ol className="books-grid">
            { filter.map((book) =>(
                <li key={book.id}> 
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <OptionsBooks shelf ={book.shelf} moveBook={(value) => moveBook(value,book.id)}></OptionsBooks>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author)=>{
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





