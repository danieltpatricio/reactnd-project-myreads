import React,{Component} from 'react'
import './App.css'
import Main from './Main/Main'
import Search from './Search/Search'
import { Route } from 'react-router-dom'




class BooksApp extends Component {
  
  render() {
    return (    
      <div className="app">
        <Route path="/search" component={Search}/> 
        <Route exact path="/" component={Main}/> 
      </div>
    )
  }
}

export default BooksApp
