import React, { useState } from 'react'

const NewBook = () => {

  const [formData , setFormData] = useState({
    title: '',
    description: '',
    cover: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({...formData , [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <form method='post' onSubmit={handleSubmit}>
        <input type='text' name='title' value={formData.title} onChange={handleChange} placeholder='Title' />
        <input type='text' name='description' value={formData.description} onChange={handleChange} placeholder='Description' />
        <input type='text' name='cover' value={formData.cover} onChange={handleChange} placeholder='Cover' />

        <button type='submit'> Save </button>
      </form>
    </div>
  )
}

export default NewBook
