import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
 
const Books = () => {

  const [books , setBooks] = useState([])

  const handleDelete = async (id) => {
    try{
      await axios.delete("http://localhost:8800/books/" + id)
      window.location.reload()
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(()=> {
    const fetchAllBooks = async () => {
      try{
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchAllBooks()
  },[])

  return (
    <div>
      <button>
        <Link to='/newbook'> Add New Book </Link>
      </button>
      {books.map((book) => (
        <div key={book.id}>
          <h1>
            {book.title}
          </h1>
          <h1>
            {book.description}
          </h1>
          <h1>
            {book.cover}
          </h1>
          <button> <Link to={`/updatebook/${book.id}`}> Update </Link> </button>
          <button onClick={() => handleDelete(book.id)} > Delete </button>
        </div>
      ))}
      
    </div>
  )
}

export default Books
