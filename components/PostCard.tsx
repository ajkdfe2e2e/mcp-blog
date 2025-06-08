import React from 'react'
import Link from 'next/link'
import { Post } from '../lib/posts'

interface PostCardProps {
  post: Post
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="post-card">
      <Link href={`/posts/${post.slug}`}>
        <div className="post-card-content">
          {post.coverImage && (
            <div className="post-image">
              <img src={post.coverImage} alt={post.title} />
            </div>
          )}
          
          <div className="post-content">
            <div className="post-meta">
              <span className="date">{new Date(post.date).toLocaleDateString('zh-CN')}</span>
              {post.category && <span className="category">{post.category}</span>}
            </div>
            
            <h3 className="post-title">{post.title}</h3>
            <p className="post-excerpt">{post.excerpt}</p>
            
            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
      
      <style jsx>{`
        .post-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .post-card-content {
          height: 100%;
        }
        
        .post-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        
        .post-card:hover .post-image img {
          transform: scale(1.05);
        }
        
        .post-content {
          padding: 1.5rem;
        }
        
        .post-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
        
        .date {
          color: #6b7280;
        }
        
        .category {
          background: #667eea;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .post-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.75rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .post-excerpt {
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tag {
          background: #f3f4f6;
          color: #374151;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .post-content {
            padding: 1rem;
          }
          
          .post-title {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </article>
  )
}