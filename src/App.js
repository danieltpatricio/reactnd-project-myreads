import React from 'react'
import './App.css'
import Main from './Main'
import Search from './Search'
import { Route } from 'react-router-dom'

export default function BooksApp () {
  return (    
    <div className="app">
      <Route path="/search" component={Search}/> 
      <Route exact path="/" component={Main}/> 
    </div>
  )
}
