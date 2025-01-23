import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../Assets/data/postData.json";
import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./BlogDetails.module.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogs.find((post) => post.slug === slug);
    setBlog(foundBlog);
  }, [slug]);

  if (!blog) return <div>Not found</div>;

  return (
    <div className={styles.blogDetails}>
      <Link to={"/seolympus"}>
        <FaArrowLeft />
      </Link>
      <h1>{blog.title}</h1>
      <p>
        <strong>Author:</strong> {blog.author}
      </p>
      <p>
        <strong>Date:</strong> {blog.date}
      </p>
      <div className={styles.content}>
        <ReactMarkdown
          children={blog.content}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
