import React, { useState } from 'react'

function Snake() {
  const [dice, setDice] = useState("")
  const [turn, setTurn] = useState(1)
  const [p1, setP1] = useState(0)
  const [p2, setP2] = useState(0)
  const throwDice = ()=>{
    let diceValue = Math.ceil(Math.random()*1)
    setDice(diceValue)
    if (turn == 1){
      setP1(p1 + diceValue)
      setTurn(2)
    } else if (turn == 2){
      setP2(p2 + diceValue)
      setTurn(1)
    }
  }
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center'>
      {p1 == 3 ? setTimeout(()=>{setP1(22)}, 500) : null}
      <div>
        Turn : {turn}
      </div>
      <div className='w-[600px] bg-contain flex flex-wrap bg-[url(https://media.licdn.com/dms/image/v2/C4D12AQFPcUrsF97dTw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1543747519723?e=2147483647&v=beta&t=Lf6lQsxwM5bjMzCRLNwckrv8GqtcjE5KoUf09cGd6NE)] h-[500px]  bg-no-repeat'>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'></div>
        <div className={p1 == 22 && p2 == 22 ? 'both' : p1 == 22 ? 'goti1' : p2 == 22 ? 'goti2' : 'block'}>22</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>25</div>
        <div className='block'>7</div>
        <div className={p1==1 && p2==1 ? 'both' : p1 == 1 ? 'goti1' : p2 == 1 ? 'goti2' : 'block'}>1</div>
        <div className={p1 == 2 && p2 == 2 ? 'both' : p1 == 2 ? 'goti1' : p2 == 2 ? 'goti2' : 'block'}>2</div>
        <div className={p1 == 3 && p2 == 3 ? 'both' : p1 == 3 ? 'goti1' : p2 == 3 ? 'goti2' : 'block'}>3</div>
        <div className={p1 == 4 && p2 == 4 ? 'both' : p1 == 4 ? 'goti1' : p2== 4 ? 'goti2' : 'block'}>4</div>
        <div className={p1 == 5 && p2 == 5 ? 'both' : p1 == 5 ? 'goti1' : p2== 5 ? 'goti2' : 'block'}>5</div>
        <div className={p1 == 6 && p2 == 6 ? 'both' : p1 == 6 ? 'goti1' : p2== 6 ? 'goti2' : 'block'}>6</div>
      </div>
      <div>
        Player1: {p1}
      </div>
      
      <div onClick={()=> throwDice()} className='h-[100px] w-[100px] bg-gray-400 flex items-center justify-center text-2xl'>{dice}</div>
      <div>
        Player2: {p2}
      </div>
    </div>
  )
}

export default Snake