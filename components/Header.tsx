import React, { useState } from 'react'
import Link from 'next/link'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link href="/">
            <span className="logo">MCP博客</span>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link href="/" className="nav-link">
            首页
          </Link>
          <Link href="/posts" className="nav-link">
            文章
          </Link>
          <Link href="/create" className="nav-link">
            创建文章
          </Link>
          <Link href="/gallery" className="nav-link">
            AI配图
          </Link>
          <Link href="/about" className="nav-link">
            关于
          </Link>
        </nav>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="切换菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <style jsx>{`
        .header {
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #667eea;
          cursor: pointer;
        }
        
        .nav {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
          padding: 0.5rem 0;
          position: relative;
        }
        
        .nav-link:hover {
          color: #667eea;
        }
        
        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: #667eea;
        }
        
        .menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .menu-toggle span {
          width: 25px;
          height: 3px;
          background: #333;
          margin: 3px 0;
          transition: 0.3s;
        }
        
        @media (max-width: 768px) {
          .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem 2rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
          }
          
          .nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .menu-toggle {
            display: flex;
          }
          
          .nav-link {
            padding: 0.75rem 0;
            border-bottom: 1px solid #eee;
          }
          
          .nav-link:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </header>
  )
}