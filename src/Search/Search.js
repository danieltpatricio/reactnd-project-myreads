import React,{Component} from 'react'
import * as BooksAPI from '../config/BooksAPI'
import ListSearch from './ListSearch'
import { Link } from 'react-router-dom'

export default class Search extends Component{
    state = {
        books: [],
        booksSearch:[]
        
    } 

    componentDidMount(){
        BooksAPI.getAll().then(Books =>(Books)).then(books => this.setState({books: books}))
    }

    searchApiBooks = (value) =>{     
        BooksAPI.search(value)
        .then(books => (books && !books.error
            ? this.mergeBooks(books)
            : this.setState({booksSearch:[]})
        ))
    }

    handleChange = value => {    
        this.searchApiBooks(value) 
    };

    mergeBooks = (booksSearch) =>{
        this.setState(currentState =>{
            booksSearch.map(item => {
                const book = currentState.books.find(k => k.id === item.id );
                return book ? item.shelf = book.shelf :[]
            })
            currentState.booksSearch = booksSearch
            return currentState
        })
    }



    moveBook = (shelf,book) => {
        BooksAPI.update(book.id,shelf).then(
          BooksAPI.getAll().then(books => this.setState({books: books}))
          ).then( this.mergeBooks(this.state.booksSearch))
    } 

    

    tryImage = (book) =>{ 
        try{ return <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div> }
        catch(error){ return <div className="book-cover" style={{ width: 128, height: 193 ,backgroundColor: 'lightgray'}}></div> }
    }

    tryAuthor = (book) =>{
        try{
            return (
                book.authors.map ((author)=>{
                    return <div key={author} className="book-authors">{author}</div>
                })
            )
        }
        catch(error){}
    }


    render(){
        const {value,booksSearch} = this.state

        return(
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/'>Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" 
                            value={value}
                            onChange={(e)=>this.handleChange(e.target.value)}
                            placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <ListSearch books={booksSearch} tryImage={this.tryImage} tryAuthor={this.tryAuthor} moveBook={this.moveBook}></ListSearch>
                </div>
            </div>
        )
    }
}

