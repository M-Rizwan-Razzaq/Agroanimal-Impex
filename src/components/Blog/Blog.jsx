import React, { useEffect } from 'react'
import "./blog.css"
import { AiOutlineUser, AiOutlineComment } from 'react-icons/ai';
import { FaReadme } from 'react-icons/fa';
import CompoHeader from '../common/CompoHeader'
import { GoArrowRight } from "react-icons/go";
import { useLocation } from 'react-router-dom';
const Blog = () => {



  return (
    <div>
<CompoHeader name="Blog"/>

<div  style={{ rowGap: '2rem', columnGap: '2rem' }} className='blog-grid-container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  md:px-10 px-3  '>

{
  [...new Array(10)].map(()=>(

<div   className='blog-grid-box md:h-[62vh] h-[50vh] '>

<div   className='rounded-lg relative overflow-hidden md:h-[69%] h-[69%]  '>
<img src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/blog-4-450x330.jpg" alt="" className='w-full h-full'/>
<p className='absolute top-3 left-3 bg-white py-2 px-2'>september 12, 2023</p>


</div>

<div className="flex flex-col gap-3 mt-3 " >
      {/* Admin and Comment in a single line */}
      <div className="flex items-center gap-5 text-gray-500">
      <div>
        <AiOutlineUser size={20} className='inline mr-1'/>
        <span>Admin</span>
        </div>
        <div>

      
          <AiOutlineComment size={20} className='inline mr-1' />
         
        <span>Comment</span>
        </div>
      </div>

      {/* Heading on a new line */}
      <h2 className="text-xl ">Fresh vagitable Food</h2>

      {/* Read more button with icon on a new line */}
      <div className="text-decoration-line: underline">
      

      
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


    </div>
  )
}

export default Blog