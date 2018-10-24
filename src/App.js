import React from 'react'
import './App.css'
import Main from './Main/Main'
import Search from './Search/Search'
import { Route } from 'react-router-dom'
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export default function BooksApp () {
  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: {
        main: '#f44336',
      },
    },
  });
  return (    
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <Route path="/search" component={Search}/> 
        <Route exact path="/" component={Main}/> 
      </div>
    </MuiThemeProvider> 
  )
}
