import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Layout } from '../components/Layout'
import { PostCard } from '../components/PostCard'
import { getAllPosts, Post } from '../lib/posts'

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>MCP博客 - 首页</title>
        <meta name="description" content="一个集成MCP工具的现代化博客网站" />
      </Head>
      
      <div className="hero-section">
        <div className="hero-content">
          <h1>欢迎来到MCP智能博客</h1>
          <p>集成AI配图功能的现代化博客平台</p>
          <div className="hero-buttons">
            <Link href="/posts" className="btn btn-primary">
              浏览文章
            </Link>
            <Link href="/create" className="btn btn-secondary">
              创建文章
            </Link>
          </div>
        </div>
      </div>

      <section className="recent-posts">
        <h2>最新文章</h2>
        <div className="posts-grid">
          {posts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length > 6 && (
          <div className="view-all">
            <Link href="/posts" className="btn btn-outline">
              查看全部文章
            </Link>
          </div>
        )}
      </section>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
          margin-bottom: 3rem;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          border: 2px solid transparent;
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary:hover {
          background: #f8f9ff;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
        }

        .btn-outline {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-outline:hover {
          background: #667eea;
          color: white;
        }

        .recent-posts {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .recent-posts h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          color: #333;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .view-all {
          text-align: center;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  
  return {
    props: {
      posts,
    },
  }
}