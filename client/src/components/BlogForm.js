import React, { useState } from 'react';

const BlogForm = () => {
  const [blogData, setBlogData] = useState({
    blogTitle: '',
    blogContent: '',
    authorName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        console.log('Blog data submitted successfully');
        // Clear the form after successful submission (optional)
        setBlogData({
          blogTitle: '',
          blogContent: '',
          authorName: '',
        });
      } else {
        console.error('Error submitting blog data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Blog Title */}
      <div className="mb-3"><h1>BLOG AREA</h1></div>
      
      <div className="mb-3">
        <label htmlFor="blogTitle">Blog Title:</label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          value={blogData.blogTitle}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Blog Content */}
      <div className="mb-3">
        <label htmlFor="blogContent">Blog Content:</label><br/>
        <textarea
          id="blogContent"
          name="blogContent"
          value={blogData.blogContent}
          onChange={handleChange}
          rows="10"
          cols="50"
          required
        ></textarea>
      </div>
      
      {/* Author Name */}
      <div className="mb-3">
        <label htmlFor="authorName">Author Name:</label>
        <input
          type="text"
          id="authorName"
          name="authorName"
          value={blogData.authorName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit button */}
      <button type="submit" className="btn btn-success">Submit</button>
      {/* Add other buttons as needed */}
    </form>
  );
};

export default BlogForm;
