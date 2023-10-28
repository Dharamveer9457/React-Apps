// BlogCard.js

import React from 'react';

const BlogCard = ({ blog, onEdit, onDelete }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <img src={blog.image} alt="Blog Image"/>
        <p className="card-text">Date: {blog.date}</p>
        <button className="btn btn-warning mr-2" onClick={() => onEdit(blog.id)}>
          Update
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(blog.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
