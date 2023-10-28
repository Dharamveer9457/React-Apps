import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogCard from './BlogCard';

function CreateBlog() {
        const [text, setText] = useState('');
        const [imageUrl, setImageUrl] = useState('');
        const [date, setDate] = useState('')
        const [blogs, setBlogs] = useState([]);
        const [isEditing, setIsEditing] = useState(false);
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (text.trim() === '') {
            return;
          }
      
          const newBlog = {
            id: new Date().getTime(),
            title: text,
            image: imageUrl, // Add image URL here if you want
            date: date,
          };
      
          setBlogs([...blogs, newBlog]);
          setText('');
          setImageUrl('');
          setDate('');
        };
      
        const deleteBlog = (id) => {
          setBlogs(blogs.filter((blog) => blog.id !== id));
        };
      
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      placeholder="Enter title of the blog"
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e)=>setImageUrl(e.target.value)}
                      value={imageUrl}
                      placeholder="Enter Image URL"
                    />
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      onChange={(e)=>setDate(e.target.value)}
                      value={date}
                      className="form-control"
                      placeholder="Enter Date"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2 mb-2">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-6">
                {blogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    onEdit={setIsEditing}
                    onDelete={deleteBlog}
                  />
                ))}
              </div>
            </div>
          </div>
        );
    };


export default CreateBlog