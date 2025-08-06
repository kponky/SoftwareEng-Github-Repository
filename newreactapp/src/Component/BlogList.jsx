import React from 'react'

const BlogList = (props) => {

    // another method id destructuring it by just calling the argument blogs
    const blogs = props.blogs;


  return (
    <div className='blog-lists'>
      {blogs.map((blogContent) =>(
        <div className="blog-preview" key={blogContent.id}>
          <h2>{blogContent.title}</h2>
          <p>Written by {blogContent.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList
