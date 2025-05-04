import React from 'react'
import Home from './pages/Home'
import Calculator from './pages/Projects/Calculator'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TicTacToe from './pages/Projects/TicTacToe'
import SnakeLadder from './pages/Projects/SnakeLadder'
import AnalogClock from './pages/Projects/AnalogClock'
import Todo_Test from './pages/Projects/Todo_Test'
import Todolistfrontend from './pages/Projects/Todolistfrontend'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='/calculator' element={<Calculator/>}></Route>
      <Route path='/tictactoe' element={<TicTacToe/>}></Route>
      <Route path='/snake_ladder' element={<SnakeLadder/>}></Route>
      <Route path='/analog_clock' element={<AnalogClock/>}></Route>
      <Route path='/test-todo' element={<Todo_Test/>}></Route>
      <Route path='/test-frontend' element={<Todolistfrontend/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App