import Header from './components/Header.jsx'
import Blogs from './components/Blogs.jsx'
import Pagination from './components/Pagination.jsx'
import { AppContext } from './context/AppContext.js';
import { useEffect, useContext } from 'react';
import "./App.css"
export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
