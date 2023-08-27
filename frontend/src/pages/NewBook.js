import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewBook = () => {

  const [formData , setFormData] = useState({
    title: '',
    description: '',
    cover: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({...formData , [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      console.log(formData)
      await axios.post("http://localhost:8800/books", formData)
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

export default NewBook
