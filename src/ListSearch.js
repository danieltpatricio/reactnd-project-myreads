import React from 'react'
import './App.css'
import OptionsBooks from './OptionsBooks'


export default function ListSearch (props){
    const {books} = props

    try{
    return(
        <div className="search-books-results">
            <ol className="books-grid">
            { books.map((book) => {
                return(
                    <li key={book.id}> 
                        <h6>{book.title}</h6>
                        
                    </li>
                )    
                })
            }
            </ol>
        </div>    
    )}catch(error){
        console.log("nenhum livro encontrado")
        return (
            <div className="search-books-results">
                <h4>Nenhum Livro encontrado.</h4>
            </div>  
        )
    }
}





