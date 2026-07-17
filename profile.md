為了讓您的專案作品集在申請 **資訊工程 (CS)** 或 **人機互動 (HCI)** 碩士時更具競爭力，我將結構擴充為包含「系統架構」、「核心技術挑戰」與「HCI 洞察」的完整版本。

這份 Markdown 文件採用了專業研究報告與技術部落格的混合格式，能有效展示您作為 **Creative Technologist** 的深度。

---

# 🚀 精選專案作品集 (Selected Technical Portfolio)

## 01 | 智慧強風監控與實時 IoT 儀表板系統

**`#IoT_System` `#FullStack` `#RealTime_Data` `#Safety_Critical**`

* **專案角色：** 主導開發工程師 (Lead Engineer)
* **核心技術：** Python, FastAPI, MQTT, ESP32, React, Docker, PostgreSQL
* **專案背景：** 針對大型燈會裝置（如 2026 中臺灣元宵燈會），環境安全是首要考量。傳統風速計缺乏即時聯網能力，難以在強風來襲時瞬間通知管理人員。

### 🛠️ 系統架構與實現 (System Architecture)

* **邊緣端處理：** 使用 **ESP32** 介接工業級風速感測器，透過 C++ 實作均值濾波 (Moving Average) 演算法，過濾高頻雜訊以確保數據準確性。
* **數據管道：** 部署容器化 **Mosquitto MQTT Broker** 作為通訊核心，配合 **FastAPI** 進行異步數據持久化至 **PostgreSQL** 時序資料庫。
* **視覺化介面：** 使用 **React** 建立實時儀表板，整合地理資訊系統 (GIS) 顯示各節點風力分布。

### 💡 核心挑戰與 HCI 洞察

* **技術挑戰：** 需在高併發環境下達成次秒級延遲。透過優化 MQTT QoS 等級與 FastAPI 的非阻塞異步處理，將 **End-to-End 延遲壓低至 200ms 內**。
* **HCI 考量：** 考慮到現場維護人員在緊急狀況下的認知負荷，介面採用了**高對比度的色彩警告機制**與音訊告警，確保決策效率。

---

## 02 | "autoControl" 工業級馬達邏輯控制系統

**`#Mechatronics` `#HCI` `#Industrial_Interface` `#ModbusTCP**`

* **專案角色：** 互動工程師 (Interactive Engineer)
* **核心技術：** Python, Modbus TCP, FastAPI, PLC Integration (Siemens/Omron)
* **專案背景：** 在互動裝置中，同步多組大型馬達需精準控制。本專案旨在橋接現代 Web 技術與工業 PLC 自動化硬體。

### 🧱 技術實作細節

* **協定轉換層：** 自研 Python 驅動模組，將抽象的互動邏輯轉換為 **Modbus TCP** 的位元組指令 (Read/Write Coils & Registers)，實現對 PLC 的直接操控。
* **安全防護機制：** 於後端實作虛擬邊界 (Soft Limits) 與心跳偵測 (Heartbeat)，一旦通訊中斷即自動觸發安全停機協定。

### 🌟 成果與貢獻

* **開發效率：** 透過標準化的 API 封裝，使前端工程師無需了解工業協定即可開發控制介面，**縮短了 40% 的開發週期**。
* **硬體兼容性：** 成功整合多品牌 PLC（如 Siemens, Omron），展現卓越的系統整合與跨域溝通能力。

---

## 03 | 3D 人體姿勢特徵點提取與分析管線

**`#Computer_Vision` `#AI_Pipeline` `#MediaPipe` `#Data_Science**`

* **專案角色：** 資料工程師與演算法開發
* **核心技術：** YOLOv8, MediaPipe, OpenCV, Python (NumPy/Pandas)
* **專案背景：** 為了支持手勢控制與動作識別的研究，需要從大規模 2D 影像數據集（如 COCO）中自動化提取高維度的 3D 空間特徵。

### 🧪 處理工作流 (Pipeline)

1. **目標檢測：** 運用 **YOLOv8** 進行精確的人體區域切割，提升特徵點提取的魯棒性。
2. **特徵點映射：** 整合 **MediaPipe Pose** 模型提取 33 個關鍵 3D 座標，並進行座標空間歸一化處理。
3. **自動化批處理：** 開發多執行緒處理腳本，實現每日萬級張影像的自動化特徵提取與 JSON 化存儲。

### 📈 專案價值

* **研究基礎：** 為後續的動作分類與人機互動研究提供了高品質的標註數據集。
* **效能優化：** 透過工作流優化，在確保準確率的前提下，顯著提升了數據預處理的吞吐量。

---

## 04 | AI 多模態導覽員「璃兒」

**`#LLM` `#RAG` `#Emotion_AI` `#Voice_Synthesis**`

* **專案角色：** 系統架構師 (System Architect)
* **核心技術：** Gemini 1.5, RAG (Retrieval-Augmented Generation), BERT, Bert-VITS 2
* **專案背景：** 探索 AI 在導覽服務中的應用潛力，開發具備情感理解與語意邏輯的數位導覽代理人。

### 🧠 核心架構

* **知識增強：** 實作 **RAG 技術**，確保 AI 回答內容基於特定的場域知識庫，減少幻覺現象。
* **情感解析：** 整合 **BERT** 模型進行情緒分析，使系統能根據使用者的語氣調整回應策略。
* **多模態輸出：** 結合 **Bert-VITS 2** 進行語音合成，提供具備語調起伏的自然人聲交互。

---

## 🛠️ 技術實力矩陣 (Technical Skills Matrix)

| 領域 | 專業技能 |
| --- | --- |
| **互動開發** | Modbus TCP, MQTT, ESP32, PLC 整合, IoT 系統設計 |
| **後端與雲端** | FastAPI, Python (Advanced), PostgreSQL, Docker, GCP |
| **AI 與視覺** | YOLOv8, MediaPipe, OpenCV, RAG, 語言模型集成 (Gemini) |
| **前端設計** | React, Redux, 數據視覺化儀表板, UI/UX 實踐 |

---

`最後更新日期：2026年3月`
`Jing Tang Lin (Neo Lin)`