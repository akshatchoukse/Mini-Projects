import React, { useState } from 'react'
import axios from 'axios'

function SnakeLadder() {
   
  let [dice,setdice] = useState('')
  let [p1,setp1] = useState(0)
  let [p2,setp2] = useState(0)
  let [turn , setturn] = useState(1)

  let throwdice = () => {
    let dicevalue = Math.ceil(Math.random() * 6)
    setdice(dicevalue)

    if (turn === 1) {
      if (p1 + dicevalue === 30) {
        setp1(p1 + dicevalue)
        setTimeout(() => alert("Player 1 win"), 300)
        resetBoard()
        setdice('')
        return
      } else if (p1 + dicevalue < 30) {
        setp1(p1 + dicevalue)
      }
      setturn(2)
    } else if (turn === 2) {
      if (p2 + dicevalue === 30) {
        setp2(p2 + dicevalue)
        setTimeout(() => alert("Player 2 win"), 300)
        setdice('')
        return
        resetBoard()
      } else if (p2 + dicevalue < 30) {
        setp2(p2 + dicevalue)
      }
      setturn(1)
    }
  } 
  let resetBoard = ()=>{
    setp1(0)
    setp2(0)
  }
  

  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center'>
        <div className=' bg-[url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1427154982i/14241449._SX540_.jpg)] h-[80vh] w-[45%] bg-black bg-no-repeat bg-contain flex flex-wrap'>
        <div className={p1 == 25 && p2 == 25 ? 'both' : p1 == 25 ? 'goti1' : p2==25 ? 'goti2' : 'block'}>25</div>
        <div className={p1 == 26 && p2 == 26 ? 'both' : p1 == 26 ? 'goti1' : p2==26 ? 'goti2' : 'block'}>26</div>
        <div className={p1 == 27 && p2 == 27 ? 'both' : p1 == 27 ? 'goti1' : p2==27 ? 'goti2' : 'block'}>27</div>
        <div className={p1 == 28 && p2 == 28 ? 'both' : p1 == 28 ? 'goti1' : p2==28 ? 'goti2' : 'block'}>28</div>
        <div className={p1 == 29 && p2 == 29 ? 'both' : p1 == 29 ? 'goti1' : p2==29 ? 'goti2' : 'block'}>29</div>
        <div className={p1 == 30 && p2 == 30 ? 'both' : p1 == 30 ? 'goti1' : p2==30 ? 'goti2' : 'block'}>30</div>
        <div className={p1 == 24 && p2 == 24 ? 'both' : p1 == 24 ? 'goti1' : p2==24 ? 'goti2' : 'block'}>24</div>
        <div className={p1 == 23 && p2 == 23? 'both' : p1 == 23? 'goti1' : p2==23? 'goti2' : 'block'}>23</div>
        <div className={p1 == 22 && p2 == 22? 'both' : p1 == 22 ? 'goti1' : p2==22 ? 'goti2' : 'block'}>22</div>
        <div className={p1 == 21 && p2 == 21? 'both' : p1 == 21? 'goti1' : p2==21? 'goti2' : 'block'}>21</div>
        <div className={p1 == 20 && p2 == 20? 'both' : p1 == 20? 'goti1' : p2==20? 'goti2' : 'block'}>20</div>
        <div className={p1 == 19 && p2 == 19 ? 'both' : p1 == 19 ? 'goti1' : p2==19 ? 'goti2' : 'block'}>19</div>
        <div className={p1 == 13 && p2 ==13? 'both' : p1 == 13? 'goti1' : p2==13? 'goti2' : 'block'}>13</div>
        <div className={p1 == 14&& p2 == 14? 'both' : p1 == 14? 'goti1' : p2==14? 'goti2' : 'block'}>14</div>
        <div className={p1 == 15&& p2 == 15? 'both' : p1 == 15? 'goti1' : p2==15? 'goti2' : 'block'}>15</div>
        <div className={p1 == 16&& p2 == 16? 'both' : p1 == 16? 'goti1' : p2==16? 'goti2' : 'block'}>16</div>
        <div className={p1 == 17&& p2 == 17? 'both' : p1 == 17? 'goti1' : p2==17? 'goti2' : 'block'}>17</div>
        <div   className={p1 == 18&& p2 == 18? 'both' : p1 == 18? 'goti1' : p2==18? 'goti2' : 'block'}>18</div>
        <div className={p1 == 12&& p2 == 12? 'both' : p1 == 12? 'goti1' : p2==12 ? 'goti2' : 'block'}>12</div>
        <div className={p1 == 11&& p2 == 11? 'both' : p1 == 11? 'goti1' : p2==11 ? 'goti2' : 'block'}>11</div>
        <div className={p1 == 10 && p2 == 10 ? 'both' : p1 == 10 ? 'goti1' : p2==10 ? 'goti2' : 'block'}>10</div>
        <div className={p1 == 9 && p2 == 9 ? 'both' : p1 == 9 ? 'goti1' : p2==9 ? 'goti2' : 'block'}>9</div>
        <div className={p1 == 8 && p2 == 8 ? 'both' : p1 == 8 ? 'goti1' : p2==8 ? 'goti2' : 'block'}>8</div>
        <div className={p1 == 7 && p2 == 7 ? 'both' : p1 == 7 ? 'goti1' : p2==7 ? 'goti2' : 'block'}>7</div>
        <div className={p1 == 1 && p2 == 1 ? 'both' : p1 == 1 ? 'goti1' : p2==1 ? 'goti2' : 'block'}>1</div>
        <div className={p1 == 2 && p2 == 2 ? 'both' : p1 == 2 ? 'goti1' : p2==2 ? 'goti2' : 'block'}>2</div>
        <div className={p1 == 3 && p2 == 3 ? 'both' : p1 == 3 ? 'goti1' : p2==3 ? 'goti2' : 'block'}>3</div>
        <div className={p1 == 4 && p2 == 4 ? 'both' : p1 == 4 ? 'goti1' : p2==4 ? 'goti2' : 'block'}>4</div>
        <div className={p1 == 5 && p2 == 5 ? 'both' : p1 == 5 ? 'goti1' : p2==5 ? 'goti2' : 'block'} >5</div>
        <div className={p1 == 6 && p2 == 6 ? 'both' : p1==6 ? 'goti1' : p2==6 ? 'goti2' : 'block'} >6</div>
        </div>
        <div className='h-[80px] w-[100px] bg-blue-700 text-white text-[15px] flex items-center justify-center ml-[100px] rounded'>Player 1 :{p1}</div>
        <div className='h-[80px] w-[100px] bg-blue-700 text-white text-[15px] flex items-center justify-center ml-[100px] rounded'>Player 2 :{p2}</div>
        <div onClick={()=> throwdice()} className='h-[100px] w-[100px] bg-slate-700 text-white text-[40px] flex items-center justify-center ml-[100px] rounded'>{dice}</div>
        {p1 == 3 ? setTimeout(()=> {setp1(22)},500):null}
        {p2 == 3? setTimeout(()=> {setp2(22)},500):null}
        {p1==5? setTimeout(()=> {setp1(8)},500):null}
        {p2 == 5 ? setTimeout(()=> {setp2(8)},500):null}
        {p1==11? setTimeout(()=> {setp1(26)},500):null}
        {p2 == 11 ? setTimeout(()=> {setp2(26)},500):null}
        {p1==20 ? setTimeout(()=> {setp1(29)},500):null}
        {p2 == 20 ? setTimeout(()=> {setp2(29)},500):null}
        {p1==17? setTimeout(()=> {setp1(4)},250):null}
        {p2 == 17 ? setTimeout(()=> {setp2(4)},250):null}
        {p1==21? setTimeout(()=> {setp1(9)},250):null}
        {p2 == 21 ? setTimeout(()=> {setp2(9)},250):null}
        {p1==19? setTimeout(()=> {setp1(7)},250):null}
        {p2 == 19 ? setTimeout(()=> {setp2(7)},250):null}
        {p1==27? setTimeout(()=> {setp1(1)},250):null}
        {p2 == 27 ? setTimeout(()=> {setp2(1)},250):null}
        {p1>= 30 ? setTimeout(()=> {alert('Player 1 win')},500) : p2 >= 30 ? setTimeout(()=> {alert('Player 2 win')},500):null}
        
    </div>
  )
}

export default SnakeLadder