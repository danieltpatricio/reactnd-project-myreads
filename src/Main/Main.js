import React,{Component} from 'react'
import ListMain from './ListMain'
import { Link } from 'react-router-dom'
import * as GLOBAL from '../config/Global'
import * as BooksAPI from '../config/BooksAPI'

export default class Main extends Component{
    state = {
        books: []
    }
  
    componentDidMount(){
        BooksAPI.getAll().then(Books =>(Books)).then(books => this.setState({books: books}))
    }

    moveBook = (event,book) => {
        BooksAPI.update(book,event.target.value).then(()=>
          BooksAPI.getAll().then(books => this.setState({books: books}))
          )
    } 

    filter = (shelf) =>{
        return this.state.books.filter((c) =>{
            return c.shelf === shelf;
        })
    }

    render(){
        const {books} = this.state

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    {GLOBAL.SHELFS.map(shelf =>(
                        <div className="bookshelf" key={shelf.id}>
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                            <ListMain 
                                books={books} 
                                filter={this.filter(shelf.id)} 
                                shelf={shelf.id} 
                                moveBook={this.moveBook}></ListMain>
                            </div>
                        </div>
                    ))
                    }
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}





