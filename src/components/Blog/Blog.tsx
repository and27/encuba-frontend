import React from "react";
import "./Blog.css";
import CategorySidebar from "./CategorySidebar.tsx";
import BlogPost from "./BlogPost.tsx";
import ChatWidget from "./ChatWidget.tsx";

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Post Title 1",
      author: "John Doe",
      category: "Lifestyle",
      tags: "Tips, Pricey Etc",
      description:
        "This is a short description of the blog post. It provides an overview of the content to entice readers to read more.",
      image: "https://picsum.photos/1500/300?random=7",
    },
    {
      id: 2,
      title: "Post Title 2",
      author: "Jane Smith",
      category: "Technology",
      tags: "Tips, Tutorials, Lifestyle",
      description:
        "Exploring post covers various aspects of maintaining a healthy lifestyle, providing diet and exercise tips.",
      image: "https://picsum.photos/1500/300?random=8",
    },
  ];

  return (
    <div className="blog">
      <h1 className="blog__title">Blog with Categories</h1>
      <div className="blog__layout">
        <CategorySidebar />
        <main className="blog__content">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </main>
        <ChatWidget />
      </div>
    </div>
  );
};

export default Blog;
