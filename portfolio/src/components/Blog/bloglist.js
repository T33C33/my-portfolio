import React from "react";
import Blog from "./blog";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";

const truncateContent = (content, wordLimit = 20) => {
  const words = content.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return content;
};

const BlogList = ({ blogs }) => {
  return (
    <div className={styles.blogList}>
      {blogs.map((post, index) => (
        <Link key={index} to={`/blog/${post.slug}`}>
          <Blog title={post.title} content={truncateContent(post.content)} />
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
