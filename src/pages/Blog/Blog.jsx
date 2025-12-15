import { React, useState } from 'react';
import './Blog.css';
import Cart from '../../components/Cart/Cart.jsx';
import { blogPosts } from '../../../data.js'; 

const Blog = () => {
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCart = currentPage * itemsPerPage;
  const indexOfFirstCart = indexOfLastCart - itemsPerPage;
  const currentCarts = blogPosts.slice(indexOfFirstCart, indexOfLastCart);

  const handleReadMore = (post) => {
    window.open(post.link, '_blank');
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(blogPosts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='blog'>
      <h1>Blog & Tin tức Crypto</h1>
      <div className='blog-grid'>
        {currentCarts.map((post) => (
          <Cart 
            key={post.id} 
            post={post}
            onReadMore={handleReadMore}
          />
        ))}
      </div>
      
      {/* Pagination Controls */}
      <div className='pagination'>
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={currentPage === 1 ? 'pagination-btn disabled' : 'pagination-btn'}
        >
          ← Prev
        </button>
        <span className='pagination-info'>
          Page {currentPage} of {Math.ceil(blogPosts.length / itemsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(blogPosts.length / itemsPerPage)}
          className={currentPage === Math.ceil(blogPosts.length / itemsPerPage) ? 'pagination-btn disabled' : 'pagination-btn'}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Blog;