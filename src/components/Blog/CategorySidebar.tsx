import React from "react";

const CategorySidebar: React.FC = () => {
  const categories = [
    "Technology",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
  ];

  return (
    <aside className="blog__sidebar">
      <h3 className="blog__sidebar-title">Categories</h3>
      <ul className="blog__categories">
        {categories.map((category, index) => (
          <li key={index} className="blog__category-item">
            <a
              href={`#${category.toLowerCase()}`}
              className="blog__category-link"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
