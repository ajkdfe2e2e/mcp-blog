# MCP智能博客

一个集成MCP工具的现代化博客平台，特别支持Minimax文生图功能。

## ✨ 特性

- 🤖 **AI配图生成**: 集成Minimax文生图API，支持中文描述生成高质量图片
- 📝 **Markdown支持**: 完整的Markdown语法支持，实时预览
- 🎨 **现代化设计**: 响应式设计，美观的用户界面
- 🚀 **GitHub Pages部署**: 一键部署到GitHub Pages
- 🔧 **MCP集成**: 深度集成Model Context Protocol工具

## 🛠 技术栈

- **前端**: Next.js + React + TypeScript
- **样式**: CSS-in-JS (styled-jsx)
- **内容管理**: Markdown + Gray Matter
- **AI功能**: MCP + Minimax API
- **部署**: GitHub Pages + GitHub Actions

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm 或 yarn

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/ajkdfe2e2e/mcp-blog.git
   cd mcp-blog
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问应用**
   打开浏览器访问 `http://localhost:3000`

### 构建生产版本

```bash
# 构建
npm run build

# 导出静态文件
npm run export
```

## 🌐 部署到GitHub Pages

### 自动部署（推荐）

1. **Fork或创建仓库**
   - Fork这个仓库或创建新的仓库
   - 确保仓库名为 `mcp-blog` 或您喜欢的名称

2. **启用GitHub Pages**
   - 进入仓库设置 → Pages
   - Source选择 "GitHub Actions"

3. **推送代码**
   ```bash
   git push origin main
   ```

4. **自动部署**
   - GitHub Actions会自动构建和部署
   - 访问 `https://ajkdfe2e2e.github.io/mcp-blog`

## 🎯 使用指南

### 创建文章

1. 访问 `/create` 页面
2. 填写文章信息：标题、作者、分类、标签、摘要
3. 使用AI配图功能生成封面图
4. 编写Markdown内容
5. 预览并发布

### AI配图功能

1. 在创建文章页面找到"AI配图生成"部分
2. 输入图片描述，例如："科技感的蓝色背景，抽象几何图形"
3. 点击"生成图片"等待AI生成
4. 选择满意的图片作为封面

## ⚙️ 配置

### MCP配置

要使用真正的MCP Minimax文生图功能，需要配置API密钥：

```env
MINIMAX_API_KEY=your_minimax_api_key
MCP_SERVER_URL=http://localhost:3001
```

## 🤝 贡献

欢迎贡献代码！请提交Pull Request或Issues。

## 📄 许可证

本项目采用 MIT 许可证。

---

⭐ 如果这个项目对您有帮助，请给个Star支持一下！