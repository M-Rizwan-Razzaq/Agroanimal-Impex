import React, { useEffect, useState } from 'react'
import "./blog.css"
import { AiOutlineUser, AiOutlineComment } from 'react-icons/ai';
import CompoHeader from "../common/CompoHeader";
import compoheaderimg from "../../images/contactus1.jpg";
import { GoArrowRight } from "react-icons/go";
import blogData from './blogdata';
import { useNavigate } from 'react-router-dom';
const Blog = () => {
const[BlogData,setBlogData] =  useState(blogData[0])
const [page, setpage] = useState(1);
const navigate =  useNavigate();
const handclick1 = () => {
  setBlogData(blogData[0]);
  setpage(1);
};
const handclick2 = () => {
  setBlogData(blogData[1]);
  setpage(2);
};

  return (
    <div>
<CompoHeader name="Blog" image={compoheaderimg}/>

<div  style={{ rowGap: '2rem', columnGap: '2rem' }} className='blog-grid-container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  md:px-8 px-3 py-4 mt-10'>

{
  BlogData.map((elm)=>(

<div className='blog-grid-box md:h-[62vh] h-[50vh]' onClick={()=>navigate(`/blogDetail/${elm.id}`)} >

<div   className='rounded-lg relative overflow-hidden md:h-[69%] h-[69%]  '>
<img src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/blog-4-450x330.jpg" alt="" className='w-full h-full'/>
<p className='absolute top-3 left-3 bg-white py-2 px-2'>{elm.date}</p>


</div>

<div className="flex flex-col gap-3 mt-3 " >
      {/* Admin and Comment in a single line */}
      <div className="flex items-center gap-5 text-gray-500">
      <div>
        <AiOutlineUser size={20} className='inline mr-1'/>
        <span  className='hover:text-[#CCB100] cursor-pointer'>{elm.author}</span>
        </div>
        <div>

      
          <AiOutlineComment size={20} className='inline mr-1' />
         
        <span className='hover:text-[#CCB100] cursor-pointer'>{elm.comments} Comment</span>
        </div>
      </div>

      {/* Heading on a new line */}
      <h2 className="text-xl hover:text-[#CCB100]  cursor-pointer">{elm.title}</h2>

      {/* Read more button with icon on a new line */}
      <div className="text-decoration-line: underline text-green-900 hover:text-[#CCB100] font-semibold cursor-pointer" >
      

      
        <p className='inline '>  
          Read More

        </p>
        <GoArrowRight size={20} className='inline ml-1'/>
       <hr />
      </div>
    </div>


</div>



  ))
}

</div>
 <section className="flex content-center justify-center gap-1 my-14">
        <button
          onClick={handclick1}
          className={
            page !== 2
              ? `hidden`
              : `text-green-900 hover:text-white border border-gray-400 hover:bg-green-900 focus:ring-4 focus:outline-none  font-medium rounded text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>

        <button
          onClick={handclick1}
          type="button"
          style={{
            backgroundColor: page === 1 ? "rgb(20 83 45)" : "",
            color: page === 1 ? "white" : "",
          }}
          className={`text-green-900 border border-gray-400 focus:ring-4 focus:outline-none font-medium rounded text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 ${
            page === 1
              ? "!hover:bg-green-900"
              : "text-green-900 hover:text-white hover:bg-green-900"
          }`}
        >
          1
        </button>

        <button
          onClick={handclick2}
          type="button"
          style={{
            backgroundColor: page === 2 ? "rgb(20 83 45)" : "",
            color: page === 2 ? "white" : "",
          }}
          className={`text-green-900 border border-gray-400 focus:ring-4 focus:outline-none font-medium rounded text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 ${
            page === 2
              ? "!hover:bg-green-900"
              : "text-green-900 hover:text-white hover:bg-green-900"
          }`}
        >
          2
        </button>

        <button
          onClick={handclick2}
          type="button"
          className={
            page === 2
              ? `hidden`
              : `text-green-900 hover:text-white border border-gray-400 hover:bg-green-900 focus:ring-4 focus:outline-none  font-medium rounded text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </section>

 

    </div>
  )
}

export default Blog