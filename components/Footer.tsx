import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MCP博客</h3>
            <p>一个集成AI配图功能的现代化博客平台</p>
          </div>
          
          <div className="footer-section">
            <h4>快速链接</h4>
            <ul>
              <li><a href="/">首页</a></li>
              <li><a href="/posts">文章</a></li>
              <li><a href="/create">创建文章</a></li>
              <li><a href="/gallery">AI配图</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>功能特色</h4>
            <ul>
              <li>AI智能配图</li>
              <li>Markdown支持</li>
              <li>响应式设计</li>
              <li>GitHub部署</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 MCP博客. 使用MCP工具构建。</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: #2d3748;
          color: white;
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          color: #667eea;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .footer-section h4 {
          color: #a0aec0;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .footer-section p {
          color: #cbd5e0;
          line-height: 1.6;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: #cbd5e0;
          transition: color 0.3s;
        }
        
        .footer-section a:hover {
          color: #667eea;
        }
        
        .footer-bottom {
          border-top: 1px solid #4a5568;
          padding-top: 1rem;
          text-align: center;
          color: #a0aec0;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer {
            padding: 2rem 0 1rem;
          }
        }
      `}</style>
    </footer>
  )
}