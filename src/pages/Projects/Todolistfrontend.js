import React, { useState } from 'react';

function Todolistfrontend() {
  const [productObj, setProductObj] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    color: ""
  });
  const [allItems, setAllItems] = useState([]);
  const [updateIndex, setUpdateIndex] = useState("");

  const addProduct = () => {
    setAllItems([...allItems, productObj]);
    setProductObj({
      title: "",
      price: "",
      image: "",
      description: "",
      color: ""
    });
  };

  const updateProduct = () => {
    const newList = allItems.map((item, index) =>
      index == updateIndex ? productObj : item
    );
    setAllItems(newList);
    setUpdateIndex("");
    setProductObj({
      title: "",
      price: "",
      image: "",
      description: "",
      color: ""
    });
  };

  return (
    // ... same React code logic

<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
  <div className="bg-white shadow-lg p-6 rounded-2xl mb-10 flex flex-wrap gap-4 items-end">
    <input
      value={productObj.title}
      onChange={(e) => setProductObj({ ...productObj, title: e.target.value })}
      type="text"
      placeholder="Title"
      className="border border-gray-300 px-4 py-2 rounded-lg w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      value={productObj.price}
      onChange={(e) => setProductObj({ ...productObj, price: e.target.value })}
      type="tel"
      placeholder="Price"
      className="border border-gray-300 px-4 py-2 rounded-lg w-36 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      value={productObj.image}
      onChange={(e) => setProductObj({ ...productObj, image: e.target.value })}
      type="text"
      placeholder="Image URL"
      className="border border-gray-300 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      value={productObj.description}
      onChange={(e) => setProductObj({ ...productObj, description: e.target.value })}
      type="text"
      placeholder="Description"
      className="border border-gray-300 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      value={productObj.color}
      onChange={(e) => setProductObj({ ...productObj, color: e.target.value })}
      type="text"
      placeholder="Color"
      className="border border-gray-300 px-4 py-2 rounded-lg w-36 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {updateIndex === "" ? (
      <button
        onClick={addProduct}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
      >
        Submit
      </button>
    ) : (
      <button
        onClick={updateProduct}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
      >
        Update
      </button>
    )}
  </div>

  <table className="table-auto w-full bg-white shadow-lg rounded-2xl overflow-hidden">
    <thead>
      <tr className="bg-indigo-200 text-indigo-900">
        <th className="border p-4">S.no</th>
        <th className="border p-4">Title</th>
        <th className="border p-4">Image</th>
        <th className="border p-4">Price</th>
        <th className="border p-4">Description</th>
        <th className="border p-4">Color</th>
        <th className="border p-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      {allItems.map((product, index) => (
        <tr key={index} className="text-center hover:bg-indigo-50 transition">
          <td className="border p-4">{index + 1}</td>
          <td className="border p-4">{product.title}</td>
          <td className="border p-4">
            <img
              src={product.image}
              alt="product"
              className="w-16 h-16 object-cover mx-auto rounded-md shadow-sm"
            />
          </td>
          <td className="border p-4">{product.price}</td>
          <td className="border p-4">{product.description}</td>
          <td className="border p-4">{product.color}</td>
          <td className="border p-4">
            <button
              onClick={() => {
                setUpdateIndex(index);
                setProductObj(product);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg font-medium transition"
            >
              Edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default Todolistfrontend;