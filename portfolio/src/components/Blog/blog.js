import React from "react";
import styles from "./blog.module.css";

const Blog = ({ title, content }) => (
  <div className={styles.blog}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.content}>{content}</p>
  </div>
);

export default Blog;
