import React from 'react';
import BlogList from './bloglist';
import blogData from '../../Assets/data/postData.json';
import styles from "./blog.module.css";

const SEOlympus = () => {
  return (
    <div className={styles.blogPage} id='seolympus'>
      <BlogList blogs={blogData} />
    </div>
  )
}

export default SEOlympus
