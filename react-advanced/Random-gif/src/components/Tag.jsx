import React, {useState } from 'react'
import Spinner from './Spinner.js';
import useGif from '../hooks/useGif.js';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [tag, settag] = useState('');
  // console.log(API_KEY)
  const {gif, loading, fetchData} = useGif(tag);
  function changeHandler(event){
    settag(event.target.value);
  }
  function clickHandler(){
    fetchData();
  }
  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl mt-[15px] underline uppercase font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width = "450" alt = "gif"/>)
      }
      <input
      className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={changeHandler}
      value = {tag}
      />
      <button onClick={clickHandler} className="w-10/12 bg-red-500 mb-[10px] text-lg py-2 rounded-lg">
        Generate
      </button>
    </div>
  )
}
