import React, { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

  // const [age, setAge] = useState("500");

  //   const handleClick = ()=>{

  //     setAge('500')
  // }

  const [blogs, setBlogs] = useState([
    {title: "My tech Journey", body:"lorem isuim...", author: "Abasz...",id: 1 },
    {title: "My tech Journey", body:"lorem isuim...", author: "kponky...",id: 2 },
    {title: "My tech Journey", body:"lorem isuim...", author: "Abas...",id: 3 },
    {title: "My tech Journey", body:"lorem isuim...", author: "Nduke...",id: 4 },
    {title: "My tech Journey", body:"lorem isuim...", author: "kuu...",id: 5 },
    {title: "My tech Journey", body:"lorem isuim...", author: "Essia...",id: 6 }
  ]);

  
    return (
    <div className='home'>
      {/* <div className="home">
        <h1>Home page </h1>
        <p>{age}</p>
        <button onClick={handleClick}>click me</button>
      </div> */}

      {/* {blogs.map((blogContent) =>(
        <div className="blog-preview" key={blogContent.id}>
          <h2>{blogContent.title}</h2>
          <p>Written by {blogContent.author}</p>
        </div>
      ))} */}

      <BlogList blogz ={blogs} />
    </div>
  )
}

export default Home
