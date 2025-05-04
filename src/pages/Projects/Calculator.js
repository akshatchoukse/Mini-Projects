import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Calculator() {
  const [value, setvalue] = useState('');
  let navigate = useNavigate();

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <button
          onClick={() => navigate("/")}
          className="mb-4 px-4 py-2 w-[200px]  bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition"
        >
          Go to Home Page
        </button>
      <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-4 w-[320px]">
        
        <div className="bg-black text-right text-3xl font-mono p-4 rounded mb-4 min-h-[60px]">
          {value || '0'}
        </div>

        <div className="grid grid-cols-4 gap-3 text-center">
          <div onClick={() => setvalue('')} className="bg-red-600 py-4 rounded cursor-pointer">AC</div>
          <div onClick={() => setvalue(value.slice(0, -1))} className="bg-yellow-500 py-4 rounded cursor-pointer">
            <i className="fa fa-long-arrow-left"></i>
          </div>
          <div onClick={() => setvalue(value + '%')} className="bg-gray-700 py-4 rounded cursor-pointer">%</div>
          <div onClick={() => setvalue(value + '/')} className="bg-gray-700 py-4 rounded cursor-pointer">/</div>

          <div onClick={() => setvalue(value + '7')} className="bg-gray-800 py-4 rounded cursor-pointer">7</div>
          <div onClick={() => setvalue(value + '8')} className="bg-gray-800 py-4 rounded cursor-pointer">8</div>
          <div onClick={() => setvalue(value + '9')} className="bg-gray-800 py-4 rounded cursor-pointer">9</div>
          <div onClick={() => setvalue(value + '*')} className="bg-gray-700 py-4 rounded cursor-pointer">*</div>

          <div onClick={() => setvalue(value + '4')} className="bg-gray-800 py-4 rounded cursor-pointer">4</div>
          <div onClick={() => setvalue(value + '5')} className="bg-gray-800 py-4 rounded cursor-pointer">5</div>
          <div onClick={() => setvalue(value + '6')} className="bg-gray-800 py-4 rounded cursor-pointer">6</div>
          <div onClick={() => setvalue(value + '-')} className="bg-gray-700 py-4 rounded cursor-pointer">-</div>

          <div onClick={() => setvalue(value + '1')} className="bg-gray-800 py-4 rounded cursor-pointer">1</div>
          <div onClick={() => setvalue(value + '2')} className="bg-gray-800 py-4 rounded cursor-pointer">2</div>
          <div onClick={() => setvalue(value + '3')} className="bg-gray-800 py-4 rounded cursor-pointer">3</div>
          <div onClick={() => setvalue(value + '+')} className="bg-gray-700 py-4 rounded cursor-pointer">+</div>

          <div onClick={() => setvalue(value + '00')} className="bg-gray-800 py-4 rounded cursor-pointer">00</div>
          <div onClick={() => setvalue(value + '0')} className="bg-gray-800 py-4 rounded cursor-pointer">0</div>
          <div onClick={() => setvalue(value + '.')} className="bg-gray-800 py-4 rounded cursor-pointer">.</div>
          <div onClick={() => setvalue(eval(value))} className="bg-green-600 py-4 rounded cursor-pointer">=</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
