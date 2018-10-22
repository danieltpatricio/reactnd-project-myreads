import React,{Component} from 'react'
import ListMain from './ListMain'
import { Link } from 'react-router-dom'
import Shelfs from '../config/Shelfs'
import * as BooksAPI from '../config/BooksAPI'

export default class Main extends Component{
    state = {
        books: []
    }

  
    componentDidMount(){
        BooksAPI.getAll().then(Books =>(Books)).then(books => this.setState({books: books}))
    }

    moveBook = (shelf,book) => {
        BooksAPI.update(book.id,shelf).then(
          BooksAPI.getAll().then(books => this.setState({books: books}))
          )
    } 

    filter = (shelf) =>{
        return this.state.books.filter((c) =>{
            return c.shelf === shelf;
        })
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
        const {books} = this.state

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    {Shelfs.map((shelf) =>{
                        return(
                            <div className="bookshelf" key={shelf.id}>
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                            <ListMain 
                                books={books} 
                                tryImage={this.tryImage} 
                                tryAuthor={this.tryAuthor} 
                                filter={this.filter(shelf.id)} 
                                shelf={shelf.id} 
                                moveBook={this.moveBook}></ListMain>
                            </div>
                        </div>
                        )
                    })
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





