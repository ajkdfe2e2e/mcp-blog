import type { NextApiRequest, NextApiResponse } from 'next'
import { createPost } from '../../lib/posts'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, content, excerpt, category, tags, author, coverImage, date } = req.body

      if (!title || !content) {
        return res.status(400).json({ error: '标题和内容是必需的' })
      }

      const slug = createPost({
        title,
        content,
        excerpt: excerpt || content.substring(0, 150) + '...',
        category: category || '',
        tags: tags || [],
        author: author || '匿名',
        coverImage: coverImage || '',
        date: date || new Date().toISOString(),
      })

      res.status(201).json({ success: true, slug })
    } catch (error) {
      console.error('Error creating post:', error)
      res.status(500).json({ error: '创建文章失败' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}