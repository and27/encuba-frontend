import React from "react";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    author: string;
    category: string;
    tags: string;
    description: string;
    image: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="blog__post">
      <div className="blog__post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog__post-content">
        <h2 className="blog__post-title">{post.title}</h2>
        <div className="blog__post-meta">
          <span className="blog__post-author">By {post.author}</span>
          <span className="blog__post-separator"> | </span>
          <span className="blog__post-category">{post.category}</span>
          <span className="blog__post-separator"> | </span>
          <span className="blog__post-tags">Tags: {post.tags}</span>
        </div>
        <p className="blog__post-description">{post.description}</p>
        <button className="blog__post-button">Read More</button>
      </div>
    </article>
  );
};

export default BlogPost;
