import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Todo_Test() {
  let navigate = useNavigate()
  const [postData, setPostData] = useState({
    title: '',
    price: '',
    image: '',
    description: ''
  })
  const [allProduct, setAllProduct] = useState([])

  useEffect(() => { getAllProduct() }, [])

  const postProductData = () => {
    axios.post("http://localhost:5010/todo/api", postData)
      .then((res) => {
        alert(res.data)
        setPostData({ title: '', price: '', image: '', description: '' })
        getAllProduct()
      })
      .catch((err) => alert(err))
  }

  const getAllProduct = () => {
    axios.get("http://localhost:5010/todo/api")
      .then((res) => setAllProduct(res.data))
      .catch((err) => alert(err))
  }
  const deleteData = (id) => {
    axios.delete(`http://localhost:5010/todo/api/${id}`).then((res) => { alert(res.data) ; getAllProduct()  }).catch((err) => alert(err))
  }
  const updateData = ()=>{
    axios.put(`http://localhost:5010/todo/api/${postData._id}`, postData).then((res)=>{alert(res.data); getAllProduct(); setPostData({title:'' , price:'',image : '', description : '', _id:''})}).catch((err)=> alert(err))
  }
  return (
    <div className="p-8 min-h-screen bg-gray-900 text-gray-100">

      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">📝 Product Management</h1>
      <button
          onClick={() => navigate("/")}
          className="mb-4 px-4 py-2 w-[200px]  bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition"
        >
          Go to Home Page
        </button>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <input
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-60 placeholder-gray-400"
          placeholder="Title"
        />
        <input
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-60 placeholder-gray-400"
          placeholder="Price"
        />
        <input
          value={postData.image}
          onChange={(e) => setPostData({ ...postData, image: e.target.value })}
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-60 placeholder-gray-400"
          placeholder="Image URL"
        />
        <input
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-60 placeholder-gray-400"
          placeholder="Description"
        />
        {postData._id ? <button onClick={updateData} className="bg-cyan-500 text-black px-6 py-2 rounded hover:bg-cyan-400 font-semibold transition">
          Update
        </button>
          : <button onClick={postProductData} className="bg-cyan-500 text-black px-6 py-2 rounded hover:bg-cyan-400 font-semibold transition">
            Submit
          </button>}


      </div>

      <div className="bg-gray-800 rounded shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-cyan-300">📦 Product List</h2>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-700 text-cyan-200">
              <th className="border border-gray-600 p-3">S.no</th>
              <th className="border border-gray-600 p-3">Title</th>
              <th className="border border-gray-600 p-3">Price</th>
              <th className="border border-gray-600 p-3">Image</th>
              <th className="border border-gray-600 p-3">Description</th>
              <th className="border border-gray-600 p-3">Delete</th>
              <th className="border border-gray-600 p-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {allProduct.length > 0 ? (
              allProduct.map((product, index) => (
                <tr key={index} className="hover:bg-gray-700 transition">
                  <td className="border border-gray-700 p-3">{index + 1}</td>
                  <td className="border border-gray-700 p-3">{product.title}</td>
                  <td className="border border-gray-700 p-3">₹ {product.price}</td>
                  <td className="border border-gray-700 p-3">
                    <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="border border-gray-700 p-3">{product.description}</td>
                  <td className="border border-gray-700 p-3"><button onClick={() => deleteData(product._id)}>Delete</button></td>
                  <td className="border border-gray-700 p-3"><button onClick={() => setPostData(product)}>Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-5 text-gray-500">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Todo_Test
