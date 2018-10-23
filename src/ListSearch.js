import React from 'react'
import OptionsBook from './OptionsBook'
import {List,ListItem} from '@material-ui/core'
import PropTypes from 'prop-types'
import * as Global from './config/Global'

export default function ListSearch (props){
    const {books,moveBook} = props
    
    if(books !== [] && books.length > 0 ){
        return(
            <div className="search-books-results">
                <div className="total-search" style={{paddingTop: 10}}>
                    <h4 style={{margin:0}}>Total de Livros encontrados: {books.length}</h4>
                </div>  
                <List className="books-grid" >
                    {books.map((book) => {
                        return(          
                            <ListItem key={book.id} className="search-books-results box-search">
                                {Global.tryImage(book)}
                                <div  style={{marginLeft: 10}}>
                                    <div className="book-title">{book.title}</div>
                                    {Global.tryAuthor(book)}
                                </div>
                                <OptionsBook typeOption="list" shelf ={book.shelf?book.shelf:"none"} moveBook={(event)=>moveBook(event,book.id)} ></OptionsBook>
                            </ListItem>
                        )    
                        })
                    }
                </List>
            </div>    
    )}else{
        return (
            <div className="search-books-results " >
                <div className="total-search" style={{paddingTop: 10}}>
                    <h4 style={{margin:0}}>Nenhum Livro encontrado.</h4>
                </div>  
            </div>     
        )
    }
}

ListSearch.prototype = {
    book: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}



