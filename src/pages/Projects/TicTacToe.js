import React, { useState } from 'react';

function TicTacToe() {
  const [turn, setTurn] = useState(1);
  const [block1, setblock1] = useState('');
  const [block2, setblock2] = useState('');
  const [block3, setblock3] = useState('');
  const [block4, setblock4] = useState('');
  const [block5, setblock5] = useState('');
  const [block6, setblock6] = useState('');
  const [block7, setblock7] = useState('');
  const [block8, setblock8] = useState('');
  const [block9, setblock9] = useState('');

  const handleblock1 = () => {
    if (turn === 1 && block1 === '') {
      setblock1('O');
      setTurn(2);
    } else if (turn === 2 && block1 === '') {
      setblock1('X');
      setTurn(1);
    }
  };

  const handleblock2 = () => {
    if (turn === 1 && block2 === '') {
      setblock2('O');
      setTurn(2);
    } else if (turn === 2 && block2 === '') {
      setblock2('X');
      setTurn(1);
    }
  };

  const handleblock3 = () => {
    if (turn === 1 && block3 === '') {
      setblock3('O');
      setTurn(2);
    } else if (turn === 2 && block3 === '') {
      setblock3('X');
      setTurn(1);
    }
  };

  const handleblock4 = () => {
    if (turn === 1 && block4 === '') {
      setblock4('O');
      setTurn(2);
    } else if (turn === 2 && block4 === '') {
      setblock4('X');
      setTurn(1);
    }
  };

  const handleblock5 = () => {
    if (turn === 1 && block5 === '') {
      setblock5('O');
      setTurn(2);
    } else if (turn === 2 && block5 === '') {
      setblock5('X');
      setTurn(1);
    }
  };

  const handleblock6 = () => {
    if (turn === 1 && block6 === '') {
      setblock6('O');
      setTurn(2);
    } else if (turn === 2 && block6 === '') {
      setblock6('X');
      setTurn(1);
    }
  };

  const handleblock7 = () => {
    if (turn === 1 && block7 === '') {
      setblock7('O');
      setTurn(2);
    } else if (turn === 2 && block7 === '') {
      setblock7('X');
      setTurn(1);
    }
  };

  const handleblock8 = () => {
    if (turn === 1 && block8 === '') {
      setblock8('O');
      setTurn(2);
    } else if (turn === 2 && block8 === '') {
      setblock8('X');
      setTurn(1);
    }
  };

  const handleblock9 = () => {
    if (turn === 1 && block9 === '') {
      setblock9('O');
      setTurn(2);
    } else if (turn === 2 && block9 === '') {
      setblock9('X');
      setTurn(1);
    }
  };

  const resetBoard = () => {
    setblock1('');
    setblock2('');
    setblock3('');
    setblock4('');
    setblock5('');
    setblock6('');
    setblock7('');
    setblock8('');
    setblock9('');
  };

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center w-full bg-black p-4">
  <div className="text-3xl text-white mb-4">Turn of player: {turn}</div>
  <div className="grid grid-cols-3 gap-1 w-full max-w-[400px]">
    <div onClick={() => handleblock1()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block1}</div>
    <div onClick={() => handleblock2()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block2}</div>
    <div onClick={() => handleblock3()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block3}</div>
    <div onClick={() => handleblock4()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block4}</div>
    <div onClick={() => handleblock5()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block5}</div>
    <div onClick={() => handleblock6()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block6}</div>
    <div onClick={() => handleblock7()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block7}</div>
    <div onClick={() => handleblock8()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block8}</div>
    <div onClick={() => handleblock9()} className="text-white bg-black border-white h-[120px] w-[120px] border-2 flex items-center justify-center text-5xl text-center">{block9}</div>
  </div>
  <div>{block1 == 'O' && block2=='O' && block3=='O' ? setTimeout(()=>{alert('Player 1 Win'); resetBoard();setTurn(1)},500) : null}
      {block1 == 'X' && block2=='X' && block3=='X' ? setTimeout(()=> {alert('Player 2 Win'); resetBoard();setTurn(1)},500):null}
      {block4 == 'O' && block5=='O' && block6=='O' ? setTimeout(()=>{alert('Player 1 win'); resetBoard();setTurn(1)},500):null}
      {block4=='X' && block5=='X' && block6 == 'X' ? setTimeout(()=> {alert('Player 2 win'); resetBoard();setTurn(1)},500):null}
      {block7=='O' && block8=='O' && block9=='O' ? setTimeout(()=> {alert('Player 1 Win'); resetBoard();setTurn(1)},500):null}
      {block7=='X' && block8=='X' && block9=='X' ? setTimeout(()=> {alert('Player 2 Win'); resetBoard();setTurn(1)},500):null}
      {block1=='O' && block4=='O' && block7=='O' ? setTimeout(()=> {alert('Player 1 Win'); resetBoard();setTurn(1)},500):null}
      {block1=='X' && block4=='X' && block7=='X' ? setTimeout(()=> {alert('Player 2 Win'); resetBoard();setTurn(1)},500):null}
      {block2=='O' && block5=='O' && block8=='O' ? setTimeout(()=> {alert('Player 1 Win'); resetBoard();setTurn(1)},500):null}
      {block2=='X' && block5=='X' && block8=='X' ? setTimeout(()=> {alert('Player 2 Win'); resetBoard();setTurn(1)},500):null}
      {block3=='O' && block6=='O' && block9=='O' ? setTimeout(()=> {alert('Player 1 Win'); resetBoard();setTurn(1)},500):null}
      {block3=='X' && block6=='X' && block9=='X' ? setTimeout(()=> {alert('Player 2 Win'); resetBoard();setTurn(1)},500):null}
      {block1=='O' && block5=='O' && block9=='O' ? setTimeout(()=> {alert('Player 1 Win'); resetBoard();setTurn(1)},500):null}
      {block1=='X' && block5=='X' && block9=='X' ? setTimeout(()=> {alert('Player 2 Win'); resetBoard();setTurn(1)},500):null}
      {block3=='O' && block5=='O' && block7=='O' ? setTimeout(()=> {alert('Player 1 Win'); resetBoard();setTurn(1)},500):null}
      {block3=='X' && block5=='X' && block7=='X' ? setTimeout(()=> {alert('Player 2 Win'); resetBoard();setTurn(1)},500):null}
</div>
  <div className="mt-4 text-white text-center text-lg">
    Made by Akshat Choukse
  </div>
    </div>
    
  );
  
}

export default TicTacToe;

