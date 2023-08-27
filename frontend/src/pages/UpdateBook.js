import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const UpdateBook = () => {
  const [formData , setFormData] = useState({
    title: '',
    description: '',
    cover: ''
  })

  const navigate = useNavigate()
  const location = useLocation()
  const bookId = location.pathname.split("/")[2]

  // How to locate the path ID
  // console.log(location.pathname.split("/")[2])
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({...formData , [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/books/" + bookId, formData)
      navigate("/")
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form method='post'>
        <input type='text' name='title' value={formData.title} onChange={handleChange} placeholder='Title' />
        <input type='text' name='description' value={formData.description} onChange={handleChange} placeholder='Description' />
        <input type='text' name='cover' value={formData.cover} onChange={handleChange} placeholder='Cover' />

        <button onClick={handleSubmit}> Save </button>
      </form>
    </div>
  )
}

export default UpdateBook