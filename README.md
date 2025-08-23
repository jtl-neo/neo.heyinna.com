# LJT Hub - 個人技術網站

使用 Hugo + Stack 主題建立的個人技術部落格與作品集網站。

## 🚀 快速開始

### 前置需求

- Hugo Extended 版本 (建議 0.120.0+)
- Git

### 本地開發

1. **克隆專案**
   ```bash
   git clone https://github.com/linjingtang/www.ljthub.com.git
   cd www.ljthub.com
   ```

2. **安裝 Hugo Modules 依賴**
   ```bash
   hugo mod get -u github.com/CaiJimmy/hugo-theme-stack/v3
   hugo mod tidy
   ```

3. **啟動本地伺服器**
   ```bash
   hugo server -D
   ```

4. **瀏覽網站**
   打開瀏覽器訪問 `http://localhost:1313`

## 📁 專案結構

```
www.ljthub.com/
├── config/                 # 配置文件
│   └── _default/          # 預設配置
│       ├── config.toml    # 主要配置
│       ├── module.toml    # Hugo Modules 配置
│       └── languages.toml # 語言配置
├── content/                # 內容文件
│   ├── _index.md          # 首頁
│   ├── about.md           # 關於頁面
│   ├── projects.md        # 專案頁面
│   └── posts/             # 文章目錄
├── assets/                 # 靜態資源
├── layouts/                # 自訂布局
├── static/                 # 靜態文件
└── README.md              # 專案說明
```

## ⚙️ 配置說明

### 基本設定

- **網站標題**: 在 `config.toml` 中修改 `title`
- **網站描述**: 修改 `params.description`
- **作者資訊**: 修改 `params.author` 和 `params.github`

### 社群連結

在 `config.toml` 的 `[params.socials]` 區段設定：

```toml
[params.socials]
  github = "你的GitHub用戶名"
  twitter = "你的Twitter用戶名"
  linkedin = "你的LinkedIn用戶名"
  email = "你的Email"
```

### 留言系統

目前配置使用 Giscus (GitHub Discussions)：

1. 在 GitHub 上啟用 Discussions
2. 取得 Repository ID 和 Category ID
3. 更新 `config.toml` 中的相關設定

### 側邊欄設定

自訂側邊欄內容：

```toml
[params.sidebar]
  emoji = "🌟"
  subtitle = "你的副標題"
  avatar = "你的頭像URL"
  avatarShape = "circle"  # 或 "square"
```

## 🎨 主題功能

Stack 主題提供以下功能：

- ✅ 響應式設計
- ✅ 深色/淺色模式切換
- ✅ 站內搜尋
- ✅ 文章分類和標籤
- ✅ 相簿功能 (PhotoSwipe)
- ✅ 目錄 (TOC)
- ✅ 留言系統
- ✅ 社交分享
- ✅ 多語言支援

## 📝 撰寫文章

### 建立新文章

```bash
hugo new posts/文章標題.md
```

### 文章前置資料

```yaml
---
title: "文章標題"
description: "文章描述"
date: 2024-01-15T10:00:00+08:00
draft: false
tags: ["標籤1", "標籤2"]
categories: ["分類"]
---
```

### 文章內容

支援標準 Markdown 語法，以及 Hugo 短碼。

## 🚀 部署

### GitHub Pages

1. 推送到 GitHub
2. 在 Settings → Pages 中設定 Source 為 GitHub Actions
3. 使用提供的 GitHub Actions 工作流程

### 其他平台

- **Netlify**: 直接連接 GitHub 倉庫
- **Vercel**: 支援 Hugo 建置
- **Cloudflare Pages**: 免費且快速

## 🔧 維護

### 更新主題

```bash
hugo mod get -u github.com/CaiJimmy/hugo-theme-stack/v3
hugo mod tidy
```

### 清理快取

```bash
hugo --gc
```

## 📚 參考資源

- [Hugo 官方文檔](https://gohugo.io/documentation/)
- [Stack 主題文檔](https://docs.stack.jimmycai.com/)
- [Hugo Modules 說明](https://gohugo.io/hugo-modules/)

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License

## 📞 聯絡

- Email: hello@ljthub.com
- GitHub: [@linjingtang](https://github.com/linjingtang)

---

⭐ 如果這個專案對你有幫助，請給個 Star！
