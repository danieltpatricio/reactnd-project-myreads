import React,{Component} from 'react'
import * as BooksAPI from './config/BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Shelfs from './config/Shelfs'
import SearchBooks from './SearchBooks'



class BooksApp extends Component {
  //refatorar para vida do componenet
  constructor(){
    super()
    BooksAPI.getAll().then(books => this.setState({books: books}))
  }
  state = {
    books :[],
    showSearchPage: false
  }
  

  moveBook= (shelf,book) => {
    BooksAPI.update(book,shelf).then(
      BooksAPI.getAll().then(books => this.setState({books: books}))
      )
  }    

  searchBooks = () => this.setState((currentState) =>{
    currentState.showSearchPage ? currentState.showSearchPage=false : currentState.showSearchPage=true;
    return currentState
  })

  render() {
    return (    
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks searchBooks={this.searchBooks}></SearchBooks>
        ) : (
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
                        <ListBooks books={this.state.books} shelf={shelf.id} moveBook={this.moveBook}></ListBooks>
                      </div>
                    </div>
                    )
                })
                }
              </div>
            </div>
            <div className="open-search">
              <a onClick={this.searchBooks}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
