import React from 'react';
import './Cart.css';

const Cart = ({ post, onReadMore }) => {
  
  const getCategoryLabel = (category) => {
    const labels = {
      tutorial: 'Hướng dẫn',
      analysis: 'Phân tích',
      news: 'Tin tức',
      security: 'Bảo mật'
    };
    return labels[category];
  };

  return (
    <article className="cart-article">
      {/* Ảnh đại diện */}
      <div className="cart-image-container">
        <img
          src={post.image}
          alt={post.title}
        />
        <div className="cart-category">{getCategoryLabel(post.category)}</div>
      </div>
      
      {/* Nội dung */}
      <div className="cart-content">
        <h3 className="cart-title">{post.title}</h3>
        
        {/* Thông tin ngày */}
        <div className="cart-date">
          <span>{post.date}</span>
        </div>
        
        {/* Footer */}
        <div className="cart-footer">
          <button 
            onClick={() => onReadMore(post)}
            className="cart-button"
          >
            Đọc thêm
          </button>
        </div>
      </div>
    </article>
  );
};

export default Cart;