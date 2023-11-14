import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from "./Spinner"
export default function Blogs() {
  const {loading, posts} = useContext(AppContext)
  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[66px]">
      {
        loading ? (<Spinner/>) : (
          posts.length === 0 ? 
          (<div>
            <p>No posts found</p>
            </div>) : (
              posts.map((post) => (
                <div key = {post.id}>
                  <p className="font-bold text-lg">{post.title}</p>
                  <p className = "text-sm mt-[4px]">
                    By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                  </p>
                  <p className = "text-sm mt-[4px]">Posted on {post.date}</p>
                  <p className = "text-md mt-[14px]">{post.content}</p>
                  <div className='flex gap-x-3'> 
                    {post.tags.map((tag, index)=>{
                      return <span key = {index} className="text-blue-500 underline font-bold mt-[4px] text-xs">{`#${tag} `}</span>
                    })}
                  </div>
                </div>
              ))
            )
        )
      }
    </div>
  )
}
