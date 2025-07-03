import React, { useRef, useState } from 'react'
import Cross from '../assets/Cross.jpg'
import Tick from '../assets/Tick.png'
let data=["","","","","","","","","",];
const Game = () => {
    let titleref=useRef(null);
    let [lock,setLock]=useState(false);
    let [count,setCount]=useState(0);
    let box1=useRef(null);
    let box2=useRef(null);
    let box3=useRef(null);
    let box4=useRef(null);
    let box5=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box9=useRef(null);
    let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
    const toogle=(e,num)=>{
        if(lock){
          return 0;
        }
        if(count%2===0){
          e.target.innerHTML=`<img  src='${Cross}'>`;
          data[num]="x";
          setCount(++count);
        }
        else{
            e.target.innerHTML=`<img src='${Tick}'>`;
          data[num]="o";
          setCount(++count);
        }
        Checkwin();
    }
    const Checkwin=()=>{
      if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
        won(data[2]);
      }
      else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
        won(data[5]);
      }
      else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
        won(data[8]);
      }
      else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
        won(data[6]);
      }
      else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
        won(data[7]);
      }
      else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
        won(data[8]);
      }
      else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
        won(data[8]);
      }
      else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
        won(data[6]);
      }
    }
    const won=(winner)=>{
      setLock(true);
      if(winner==="x"){
        titleref.current.innerHTML=`Congratulation: <img src=${Cross} class="inline w-8 h-8"/> win`;
      }
      else{
         titleref.current.innerHTML=`Congratulation <img src=${Tick} class="inline w-8 h-8"> win`;
      }
    }   
    const reset=()=>{
      setLock(false);
      setCount(0);
      let data=["","","","","","","","","",];
     titleref.current.innerHTML = 'Tick Cross Game in <span style="color: #ec4899; padding-left: 4px;">React</span>';
      box_array.map((e)=>{
        e.current.innerHTML=""
      })
    } 
  return (
    <div className=''>
       <div className='text-center'>
        <h1 className='mt-5 lg:text-4xl sm:text-2xl md:text-3xl font-bold flex justify-center align-middle' ref={titleref}>Tick Cross Game in <span className='text-pink-500 pl-1'>React</span></h1>
        <div>
        <div className="board">
          <div className="row1 flex gap-2 mt-7 justify-center">
            <div className="w-[70px] h-[70px] border border-b-gray-500 " ref={box1} onClick={(e)=>{toogle(e,0)}}></div>
            <div className="w-[70px] h-[70px] border border-b-gray-500 " ref={box2} onClick={(e)=>{toogle(e,1)}}></div>
            <div className="w-[70px] h-[70px] border border-b-gray-500 " ref={box3} onClick={(e)=>{toogle(e,2)}}></div>
          </div>
          <div className="row2 flex gap-2 mt-2 justify-center">
           <div className="w-[70px] h-[70px] border border-b-gray-500" ref={box4} onClick={(e)=>{toogle(e,3)}}></div>
            <div className="w-[70px] h-[70px] border border-b-gray-500" ref={box5} onClick={(e)=>{toogle(e,4)}}></div>
            <div className="w-[70px] h-[70px] border border-b-gray-500" ref={box6} onClick={(e)=>{toogle(e,5)}}></div>
          </div>
          <div className="row3 flex gap-2 mt-2 justify-center">
           <div className="w-[70px] h-[70px] border border-b-gray-500" ref={box7} onClick={(e)=>{toogle(e,6)}}></div>
            <div className="w-[70px] h-[70px] border border-b-gray-500" ref={box8} onClick={(e)=>{toogle(e,7)}}></div>
            <div className="w-[70px] h-[70px] border border-b-gray-500" ref={box9} onClick={(e)=>{toogle(e,8)}}></div>
          </div>
        </div>
        </div>
        <button className='p-1 mt-5 bg-pink-600 text-white rounded' onClick={reset}>Reset</button>
       </div>
    </div>
  )
}

export default Game