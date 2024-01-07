'use client'
import Image from "next/image";
import React, { useState } from "react";
const blogImage = "/blog.png";
import { blog } from "../source";
const Blog = () => {
  const [current, setCurrent] = useState('All')
  const handleClick =(item:string)=>{
    setCurrent(item)
  }
  const left_nav_title=[
   'All', 'Fitness', 'Health & Injuries','Shoes & gear', 'Training'
  ]

  const showBlog = (info: any) => {
    let array: any = [];
    const res = info.filter((item:any)=>item.filter.indexOf(current) > -1)
    
    res.map((item: any, index: number) => {
      array.push(
        <div key={index} className="flex flex-col gap-5 relative overflow-hidden">
          
          <Image src={item.image} alt="No image" className="rounded-lg  transition duration-500 ease-in-out hover:scale-110 cursor-pointer"  width={1000} height={1000} />
          <span className="flex flex-row gap-3">
            <h3>{item.user}</h3>
            <h3>{item.date}</h3>
          </span>
          <h1 className="text-2xl">{item.title}</h1>
          <p>{item.info}</p>
        </div>
      );
    });
    return array;
  };

  const leftNavShow=(info:any)=>{
    let array:any=[]
    info.map((item:any,index:number)=>{
      array.push(
          <h2 key={index} className="hover:bg-blue-300 hover:text-white py-1 pl-2 cursor-pointer" onClick={()=>handleClick(item)}>
              {item}
            </h2>
      )
    })
    return array;
  }

  return (
    <div>
      <Image src={blogImage} alt="No Image"  width={1500} height={1000} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10 px-16 ">
        <div className="divide-y md:col-span-1">
          <h1 className="text-2xl text-gray-600 py-2">Categories</h1>
          <div className="flex flex-col gap-2 pt-5">
            {
              leftNavShow(left_nav_title)
            }
            {/* <h2 className="hover:bg-blue-300 hover:text-white py-1 pl-2 cursor-pointer">
              Fitness
            </h2>
            <h2 className="hover:bg-blue-300 hover:text-white py-1 pl-2 cursor-pointer">
              Health & Injuries
            </h2>
            <h2 className="hover:bg-blue-300 hover:text-white py-1 pl-2 cursor-pointer">
              Shoes & gear
            </h2>
            <h2 className="hover:bg-blue-300 hover:text-white py-1 pl-2 cursor-pointer">
              Training
            </h2> */}
          </div>
        </div>
        <div className="md:col-span-2">
          {showBlog(blog)}
          </div>
      </div>
    </div>
  );
};

export default Blog;
