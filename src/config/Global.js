import React from 'react'

export const tryImage = (book) =>{ 
    try{ return <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div> }
    catch(error){ return <div className="book-cover" style={{ width: 128, height: 193 ,backgroundColor: 'lightgray'}}></div> }
}

export const tryAuthor = (book) =>{
    try{
        return (
            book.authors.map ((author)=>{
                return <div key={author} className="book-authors">{author}</div>
            })
        )
    }
    catch(error){}
}

export const SHELFS = [
    {title:'Currently Reading',id:"currentlyReading"},
    {title:'Want to Read',id:'wantToRead'},
    {title:'Read',id:'read'},
]
 