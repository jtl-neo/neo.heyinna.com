export interface ProjectLink {
    type: 'github' | 'youtube' | 'website' | 'demo' | 'paper' | 'other';
    url: string;
    label?: string; // optional custom label, defaults to type name
}

export interface GalleryImage {
    src: string;      // image URL or path
    caption?: string;  // optional caption below image
    alt?: string;      // alt text
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    role: string;
    period: string;
    tags: string[];
    summary: string;
    featured: boolean;
    description?: string;
    architecture?: { title: string; content: string }[];
    challenges?: { title: string; content: string }[];
    results?: string[];
    images?: string[];
    links?: ProjectLink[];
    gallery?: GalleryImage[];
}

const rawProjects: Project[] = [
    {
        id: 'crowd-density',
        title: '整合 LoRaWAN 與 NB-IoT 之智慧風速監控與人群密度感測系統',
        subtitle: 'Integrated Wind Speed & Crowd Density Monitoring System via LoRaWAN and NB-IoT',
        role: '主導開發工程師',
        period: '2025.11 - now',
        tags: ['IoT', 'FullStack', 'RealTime', 'Safety Critical', 'Python', 'FastAPI', 'MQTT', 'ESP32', 'React', 'Docker', 'PostgreSQL', 'GIS'],
        summary: '針對大型燈會裝置環境安全需求，建構即時風速監控系統，整合邊緣裝置、資料管道與視覺化儀表板。',
        featured: true,
        description:
            '本專案旨在解決大型戶外活動中的兩大安全難題：傳統風速計缺乏即時聯網告警能力，以及難以即時追蹤會場人流分佈 。透過建構從邊緣感測器到雲端儀表板的完整即時監控管線，系統主要實現以下功能：\n強風即時監控：利用 ESP32 介接工業級風速感測器，達成數據即時聯網，確保強風來襲時能第一時間通知管理人員 。\n人流密度追蹤：藉由 ESP32 的低功耗藍牙（BLE）技術蒐集範圍內的手機裝置數據，精確計算各區域的即時人群密度，協助管理人員判斷高風險區域並有效調配人力資源 。',
        architecture: [
            {
                title: '風速感測與處理',
                content:
                    '硬體介接：使用 ESP32 串接工業級風速感測器 。數據運算：透過 C++ 實作一分鐘均值與最高值的紀錄 。傳輸協議：統一透過 MQTT 協定處理即時數據 。',
            },
            {
                title: '數據傳輸管道',
                content:
                    '多元通訊：採用 LoRaWAN 進行數據回收，風速資訊則透過 NB-IoT 上傳 。通訊核心：部署容器化 Mosquitto MQTT Broker 作為訊息交換中樞 。持久化儲存：最終將數據儲存至時序數據庫 InfluxDB 。',
            },
            {
                title: '視覺化介面',
                content:
                    '前端開發：使用 React 建立實時儀表板 。地理資訊整合：結合 GIS 系統，動態顯示各節點風力等級以及 50mx50m 範圍內的人群密度資訊 。',
            },
        ],
        challenges: [
            {
                title: '開發挑戰（AI 協作）',
                content:
                    '在人力與時間資源極度受限的困境下，我透過 AI 技術輔助，獨力完成整套系統開發 。',
            },
            {
                title: '技術挑戰（低延遲優化）',
                content:
                    '為了在高併發環境下實現次秒級延遲，透過優化 MQTT QoS 等級與 FastAPI 的非阻塞異步處理，成功將端到端（End-to-End）延遲壓低至 200ms 以內 。',
            },
            {
                title: '人機互動（HCI）考量',
                content:
                    '考量到現場維護人員在緊急狀況下的認知負荷，介面採用高對比色彩警示機制與音訊告警，以提升決策效率 。',
            },
        ],
        results: [
            '本系統已成功於 2026 中臺灣元宵燈會 實地部署，不僅驗證了技術的可行性，更將此次實戰經驗轉化為未來專案優化與完整化的寶貴基礎 。',
        ],
        gallery: [
            {
                src: 'projects/crowd-density/人群密度儀表板.png',
                caption: '人群密度儀表板'
            },
            {
                src: 'projects/crowd-density/風速儀表板.png',
                caption: '風速儀表板'
            },
            {
                src: 'projects/crowd-density/出入口影像辨識畫面.png',
                caption: '出入口影像辨識畫面',
                alt: '出入口影像辨識畫面'
            },
            // public/projects/crowd-density/藍牙人群密度裝置.png
            {
                src: 'projects/crowd-density/藍牙人群密度裝置.png',
                caption: '藍牙人群密度裝置'
            }
        ],
        links: [
            {
                type: 'youtube',
                url: 'https://youtu.be/bHefqXWNDSw',
                label: '藍牙人流密度儀表板'
            },
            {
                type: 'youtube',
                url: 'https://youtu.be/ABfXE0vfSAo',
                label: '出入口影像辨識測試畫面'
            }
        ]
    },
    {
        id: 'central-control-system',
        title: '展演自動化中央控制系統 "autoControl"',
        subtitle: 'Event Automation & Central Control System',
        role: '主導開發工程師',
        period: '2025.12 - 2026.02',
        tags: ['React', 'FastAPI', 'ModbusTCP', 'ArtNet', 'NumPy', '3ds Max API', 'SQLite', 'System Architecture'],
        summary: '為大型燈會設計的整合式指揮系統，將傳統依賴對講機的手動協作轉型為數位化自動控制，統整燈光、機械、音效與多媒體撥放。',
        featured: true,
        description:
            '針對 2026 中台灣燈會等大型戶外展演需求，開發一套具備高可靠性的中央控制系統。本系統取代了以往繁瑣的人工對講協作，透過單一 Web 介面遠端調度數十組工業馬達與數百組燈光設備，實現毫秒級的影音、燈光、機械三方同步。',
        architecture: [
            {
                title: '全棧控制端 (Control Hub)',
                content:
                    '前端採用 React 打造直覺式圖形介面，後端透過 FastAPI 處理高併發指令，並利用 SQLite 進行裝置配置與系統日誌存儲，確保在極端環境下的數據一致性。',
            },
            {
                title: '異質協定整合層 (Protocol Integration)',
                content:
                    '整合 ArtNet (DMX512) 與 Modbus TCP 雙協定。開發基於 NumPy 的高效能處理管線，將 3D 動畫產出的數據 (npy) 即時轉換為燈具與 PLC 運動指令，達成從設計到部署的數位孿生 (Digital Twin) 流程。',
            },
            {
                title: '多媒體同步引擎',
                content:
                    '利用 Python `pygame` 與 VLC 底層接口進行多音軌同步輸出。支援高精度時間軸控制，將背景音樂透過專業音效卡精準推送到聲音控制台。',
            },
            {
                title: '高可用性備援機制 (Redundancy)',
                content:
                    '系統部署採取「主、備雙機運行」架構。兩台控制機同步監測運作狀態，確保在正式展演期間即便主機發生異常，備援系統也能立即介入執行。',
            },
            {
                title: '3dsMax 運動管線自動化',
                content:
                    '自主開發 3dsMax 插件，將美術設計的馬達動作直接導出為位置與速度數據。透過自動化分析模組生成 PLC 設定參數，大幅縮短了傳統工程師手動調整馬達軌跡的時間。',
            },
            {
                title: '燈光數據解析優化',
                content:
                    '創新地利用色票動畫提取燈光資訊，並透過 NumPy 進行矩陣運算，將複雜的視覺動效精確映射至數百個 DMX 頻道。',
            }
        ],
        challenges: [
            {
                title: '戶外極端環境下的穩定性',
                content:
                    '燈會現場環境複雜且運行時間長，曾遭遇多媒體音訊播放偶發異常。目前已定位為低層級驅動與資源鎖定問題，計畫未來以 C# (.NET) 進行核心組件重構，以提升在 Win/Mac 平台的音訊硬體調度優先級。',
            },
        ],
        results: [
            '2026 中台灣燈會官方正式演出主控系統。',
            '實現從對講機人工協作到「一鍵啟動」的全自動化展演轉型。',
            '完成主備雙機部署，確保大型活動期間零停機事故。',
            '整合 3dsMax -> PLC 指令自動化流程，縮短 50% 以上的機械校準時間。',
        ],
        gallery: [
            {
                src: 'projects/central-control-system/自動控制電腦.jpg',
                caption: '自動控制電腦'
            }
        ],
        links: [
            {
                type: 'youtube',
                url: 'https://youtu.be/oi7NZustmPk?si=eWA5B8LFxRGmuaOj',
                label: '2026 中台灣燈會主燈秀'
            },
            {
                type: 'youtube',
                url: 'https://youtube.com/shorts/73hcnSXpR_o?si=GYG7sCMXTw_tY6gn',
                label: '自動控制機械動態'
            }
        ]
    },
    {
        id: 'ai-guide-liv3r',
        title: 'AI 多模態導覽員「璃兒」',
        subtitle: 'Multi-modal AI Tour Guide "Lier"',
        role: '互動開發、情緒AI訓練、系統部屬',
        period: '2023.09 - 2024.05',
        tags: ['LLM', 'RAG', 'Emotion AI', 'Voice Synthesis', 'Gemini 1.5', 'BERT', 'Bert-VITS 2'],
        summary: '整合語意理解、情感解析與語音合成，開發具備情感表達的 AI 導覽代理人。',
        featured: true,
        description:
            '探索 AI 在導覽服務中的應用潛力，開發具備情感理解與語意邏輯的數位導覽代理人。',
        architecture: [
            {
                title: '知識增強 (RAG)',
                content:
                    '實作 RAG 技術，確保 AI 回答內容基於特定的場域知識庫，減少幻覺現象。',
            },
            {
                title: '情感解析',
                content:
                    '整合 BERT 模型進行情緒分析，使系統能根據使用者的語氣調整回應策略。',
            },
            {
                title: '多模態輸出',
                content:
                    '結合 Bert-VITS 2 進行語音合成，提供具備語調起伏的自然人聲交互。',
            },
        ],
        results: [
            '學生聯合展覽競賽第三名',
            '成功驗證 AI 導覽服務的可行性',
        ],
        links: [
            {
                type: 'youtube',
                url: 'https://youtu.be/4WYohvtWscY?si=vKM6TOk_ig-IO9ec',
                label: 'AI 多模態導覽員「璃兒」'
            }
        ]
    },
    {
        id: 'lantern-festival-2024',
        title: '中臺灣燈會影像辨識互動裝置',
        subtitle: 'Central Taiwan Lantern Festival Interactive Installation',
        role: '互動工程師',
        period: '2024.12 - 2025.02',
        tags: ['Computer Vision', 'Interactive', 'Installation'],
        summary: '為中臺灣燈會開發大規模影像辨識互動裝置，提供萬人級即時互動體驗。',
        featured: false,
    },
    {
        id: 'smart-ops-platform',
        title: '智慧營運平台',
        subtitle: 'Smart Operations Platform',
        role: '主導開發工程師',
        period: '2025.03 - 2026.01',
        tags: ['FullStack', 'IoT', 'Management', 'React', 'Python'],
        summary: '主導開發智慧營運平台，包含管理平台、工作人員管理 APP、人流偵測系統及活動園區導覽地圖。',
        featured: false,
        description:
            '負責完整的智慧營運平台開發，涵蓋管理後台、工作人員管理 APP、結合影像辨識與物聯網的人流偵測系統、以及活動園區導覽地圖。',
        results: [
            '管理平台上線營運',
            '人流偵測系統實地部署',
            '活動園區導覽地圖提升遊客體驗',
        ],
    },
    {
        id: 'lantern-2026-interactive',
        title: '2026 台灣元宵燈會 民政局燈區互動裝置',
        subtitle: '2026 Taiwan Lantern Festival Interactive Zone',
        role: '互動工程師',
        period: '2025.11 - 2026.01',
        tags: ['Interactive', 'Installation', 'IoT'],
        summary: '為 2026 台中台灣元宵燈會民政局燈區開發互動裝置。',
        featured: false,
    },
    {
        id: 'dajia-stream-ar',
        title: '大甲溪 AR 互動學習平台',
        subtitle: 'Dajia Stream AR Interactive Learning Platform',
        role: '開發工程師',
        period: '2020.01 - 2021.06',
        tags: ['AR', 'Education', 'Unity'],
        summary: '結合擴增實境技術，為大甲溪流域開發互動學習平台，提升環境教育成效。',
        featured: false,
    },
    {
        id: 'wanda-powerplant',
        title: '萬大發電廠環境教育場域',
        subtitle: 'Wanda Power Plant Environmental Education',
        role: '開發工程師',
        period: '2022.09 - 2023.11',
        tags: ['Education', 'Interactive', 'VR'],
        summary: '為萬大發電廠打造環境教育互動場域，結合數位技術提升學習體驗。',
        featured: false,
    },
    {
        id: 'vr-teaching',
        title: '虛擬實境教學應用教材開發',
        subtitle: 'VR Teaching Material Development',
        role: '開發工程師',
        period: '2022.03 - 2024.06',
        tags: ['VR', 'Education', 'Unity'],
        summary: '虛擬實境教學應用教材開發與教學實施計畫，探索 VR 在教育中的應用。',
        featured: false,
        links: [
            {
                type: 'youtube',
                url: 'https://youtu.be/ZESwRr7AqBA?si=GQvW-0CfhKlukB6M',
                label: '111年虛擬實境教學應用教材開發與教學實施計畫- 野生動物生態系'
            },
            {
                type: 'youtube',
                url: 'https://www.youtube.com/watch?v=sWjb-KU0bnI',
                label: '112年虛擬實境教學應用教材開發與教學實施計畫- 電磁大挑戰'
            },
            {
                type: 'youtube',
                url: 'https://www.youtube.com/watch?v=2Ls3vzczqQc',
                label: '113年虛擬實境教學應用教材開發與教學實施計畫- 光合之旅'
            }
        ]
    },
    {
        id: 'cms-mr-guide',
        title: 'CMS 風格的 MR 導覽平台',
        subtitle: 'CMS-style MR Guide Platform',
        role: '開發工程師',
        period: '2023.06 - 2024.06',
        tags: ['MR', 'CMS', 'Unity'],
        summary: '開發可透過 CMS 管理內容的混合實境導覽平台，降低非技術人員的內容管理門檻。',
        featured: false,
    },
];

export const projects: Project[] = rawProjects.map(project => {
    if (project.period.includes('now')) {
        const d = new Date();
        const yyyy_mm = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`;
        return { ...project, period: project.period.replace('now', yyyy_mm) };
    }
    return project;
});
