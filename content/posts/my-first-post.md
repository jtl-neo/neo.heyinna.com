---
title: "我的第一篇 Hugo 文章"
description: "使用 Stack 主題建立個人網站的經驗分享"
date: 2024-01-15T10:00:00+08:00
draft: false
tags: ["Hugo", "Stack", "個人網站", "技術分享"]
categories: ["技術筆記"]
---

## 🎉 歡迎來到我的第一篇 Hugo 文章！

今天我想分享使用 **Hugo** 和 **Stack 主題**建立個人網站的經驗。

### ✨ 為什麼選擇 Hugo？

Hugo 是一個非常快速的靜態網站生成器，具有以下優點：

- **極速建置**: 數千頁面只需幾秒鐘
- **豐富主題**: 有許多精美的現成主題
- **簡單部署**: 支援 GitHub Pages、Netlify 等平台
- **強大功能**: 支援 Markdown、短碼、模板等

### 🎨 Stack 主題的特色

Stack 主題是我選擇的原因：

- **現代設計**: 簡潔美觀的卡片式設計
- **深色模式**: 支援自動切換深色/淺色主題
- **響應式**: 完美適配各種裝置
- **豐富功能**: 搜尋、相簿、留言系統等

### 🚀 快速開始

如果你也想建立類似的網站，可以按照以下步驟：

1. **安裝 Hugo Extended 版本**
   ```bash
   brew install hugo  # macOS
   ```

2. **建立新網站**
   ```bash
   hugo new site mysite
   cd mysite
   ```

3. **安裝 Stack 主題**
   ```bash
   git submodule add https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
   ```

4. **啟動本地伺服器**
   ```bash
   hugo server -D
   ```

### 💡 個人化設定

記得要調整以下設定：

- 修改 `config.toml` 中的網站資訊
- 設定你的社群連結
- 配置留言系統（如 Giscus）
- 自訂側邊欄內容

### 🔮 未來計劃

接下來我計劃：

- 撰寫更多技術文章
- 分享專案開發經驗
- 記錄學習心得
- 與大家交流技術話題

### 📞 聯絡我

如果你有任何問題或建議，歡迎留言討論！

---

*這篇文章使用 Hugo + Stack 主題撰寫，希望對你有幫助！*
