# 🚀 部署指南

恭喜！你的 Hugo + Stack 主題網站已經成功配置完成。現在請按照以下步驟完成部署：

## 📋 部署前檢查清單

### 1. GitHub Pages 設定

1. 前往你的 GitHub 倉庫：`https://github.com/linjingtang/www.ljthub.com`
2. 點擊 **Settings** → **Pages**
3. 在 **Source** 區段選擇 **GitHub Actions**
4. 確保 **Build and deployment** 設定為 **GitHub Actions**

### 2. 啟用 Discussions (留言系統)

1. 在倉庫頁面點擊 **Settings**
2. 左側選單點擊 **General**
3. 向下滾動到 **Features** 區段
4. 勾選 **Discussions** 選項
5. 點擊 **Save**

### 3. 取得 Giscus 設定值

1. 前往 [Giscus 設定頁面](https://giscus.app/)
2. 選擇你的倉庫：`linjingtang/www.ljthub.com`
3. 選擇 **Discussion** 分類
4. 複製以下值：
   - **Repository ID** (例如：`R_kgDOKwXXXXX`)
   - **Category ID** (例如：`DIC_kwDOKwXXXXX`)

### 4. 更新留言系統配置

編輯 `config/_default/config.toml` 文件，更新留言系統設定：

```toml
[params.comments]
  provider = "giscus"
  [params.comments.giscus]
    repo = "linjingtang/www.ljthub.com"
    repoId = "你的Repository ID"  # 替換為實際值
    category = "Announcements"
    categoryId = "你的Category ID"  # 替換為實際值
    mapping = "pathname"
    strict = "0"
    reactionsEnabled = "1"
    emitMetadata = "0"
    inputPosition = "top"
    theme = "preferred_color_scheme"
    lang = "zh-TW"
```

### 5. 自訂網站內容

#### 更新個人資訊
- 修改 `config/_default/config.toml` 中的：
  - `title`: 網站標題
  - `description`: 網站描述
  - `[params.author]`: 作者資訊
  - `[params.socials]`: 社群連結

#### 更新側邊欄
```toml
[params.sidebar]
  emoji = "🌟"  # 你喜歡的 emoji
  subtitle = "你的副標題"
  avatar = "你的頭像URL"
  avatarShape = "circle"  # 或 "square"
```

#### 更新導航選單
在 `[menu]` 區段添加或修改選單項目

### 6. 添加更多內容

#### 建立新文章
```bash
hugo new posts/文章標題.md
```

#### 建立新頁面
```bash
hugo new about.md
hugo new projects.md
```

## 🌐 部署流程

### 自動部署 (推薦)
1. 推送更改到 `main` 分支
2. GitHub Actions 會自動建置和部署
3. 等待幾分鐘後，網站就會更新

### 手動部署
```bash
# 建置網站
hugo --minify

# 推送到 GitHub
git add .
git commit -m "更新網站內容"
git push origin main
```

## 🔧 常見問題

### Q: 網站沒有自動更新？
- 檢查 GitHub Actions 是否成功運行
- 確認 GitHub Pages 設定正確
- 等待幾分鐘讓部署完成

### Q: 樣式沒有載入？
- 確認 Hugo Extended 版本已安裝
- 檢查主題是否正確載入
- 清除瀏覽器快取

### Q: 留言系統不工作？
- 確認已啟用 Discussions
- 檢查 Giscus 設定值是否正確
- 確認倉庫是公開的

## 📱 測試網站

### 本地測試
```bash
hugo server -D
```
然後訪問 `http://localhost:1313`

### 線上測試
部署完成後，訪問你的 GitHub Pages URL：
`https://linjingtang.github.io/www.ljthub.com/`

## 🎨 自訂主題

### 顏色主題
Stack 主題支援深色/淺色模式自動切換

### 字體設定
可以在 `assets/scss/` 目錄下自訂樣式

### 功能啟用
在 `config.toml` 中啟用各種功能：
- 搜尋功能
- 相簿功能
- 目錄 (TOC)
- 社交分享

## 📚 參考資源

- [Hugo 官方文檔](https://gohugo.io/documentation/)
- [Stack 主題文檔](https://docs.stack.jimmycai.com/)
- [GitHub Pages 說明](https://pages.github.com/)
- [Giscus 設定指南](https://giscus.app/)

## 🆘 需要幫助？

如果遇到問題，可以：
1. 檢查 GitHub Actions 的錯誤日誌
2. 查看 Hugo 建置輸出
3. 參考 Stack 主題的 GitHub Issues
4. 在社群中尋求幫助

---

🎉 **恭喜你成功建立個人網站！** 

現在你可以開始撰寫文章、分享專案，讓你的數位足跡在網路上發光發熱！
