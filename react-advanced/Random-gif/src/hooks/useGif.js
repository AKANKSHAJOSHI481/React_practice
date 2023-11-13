import { useEffect, useState } from 'react'
import axios from 'axios';
const Randomurl = "https://api.giphy.com/v1/gifs/random?api_key=k8oXCLKVw0xEzsmpTAdI4PUZkaJfTpTb";

export default function useGif(tag) {
    const [gif, setgif] = useState('');
    const [loading, setloading] = useState('false');
    const url = `https://api.giphy.com/v1/gifs/random?api_key=k8oXCLKVw0xEzsmpTAdI4PUZkaJfTpTb&tag=${tag}`;
    // console.log(API_KEY)
    async function fetchData(){
      setloading(true);
     
      const {data} = await axios.get(tag ? url : Randomurl);
      const imageSource = data.data.images.downsized_large.url;
      console.log(imageSource);
      setgif(imageSource)
      setloading(false)
    }
    useEffect(()=>{
      fetchData();
    },[])
    
    return {gif, loading, fetchData}
}
