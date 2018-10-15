import React,{Component} from 'react'
import * as BooksAPI from './config/BooksAPI'
import './App.css'
import ListSearch from './ListSearch'

class SearchBooks extends Component{
    state = {
        books:[""]
    } 

    updateQuery = (query) =>{
        this.setState({query:query.trim()})
        BooksAPI.search(query).then(books => this.setState({books: books}))
    }

    render(){
        const {searchBooks} = this.props
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={searchBooks}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" 
                        onChange={(event) => this.updateQuery(event.target.value)}
                        placeholder="Search by title or author"/>
                    </div>
                </div>
              <ListSearch books={this.state.books}></ListSearch>
            </div>
        )
    }
}

export default SearchBooks