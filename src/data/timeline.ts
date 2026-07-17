export interface TimelineEntry {
    date: string;
    sortDate: number; // YYYYMM for sorting
    title: string;
    category: 'work' | 'education' | 'project' | 'award' | 'talk';
    description?: string;
    link?: string; // project id to link to
}

const rawTimeline: TimelineEntry[] = [
    // Education
    {
        date: '2020.09 - 2024.06',
        sortDate: 202009,
        title: '台中教育大學 — 數位內容科技學系 學士',
        category: 'education',
        description: '以全系排名第一的優異成績畢業，獲智育獎、德育獎、校友總會獎學金。',
    },
    {
        date: '2020.11 - 2024.06',
        sortDate: 202011,
        title: '台中教育大學 — 計畫工讀',
        category: 'work',
        description: '參與多項產學合作計畫開發。',
    },
    // University projects
    {
        date: '2020.01 - 2021.06',
        sortDate: 202001,
        title: '大甲溪 AR 互動學習平台',
        category: 'project',
        link: 'dajia-stream-ar',
    },
    {
        date: '2022.03 - 2024.06',
        sortDate: 202203,
        title: '虛擬實境教學應用教材開發',
        category: 'project',
        link: 'vr-teaching',
    },
    {
        date: '2022.09 - 2023.11',
        sortDate: 202209,
        title: '萬大發電廠環境教育場域',
        category: 'project',
        link: 'wanda-powerplant',
    },
    {
        date: '2023.06 - 2024.06',
        sortDate: 202306,
        title: 'CMS 風格的 MR 導覽平台',
        category: 'project',
        link: 'cms-mr-guide',
    },
    {
        date: '2023.09 - 2024.05',
        sortDate: 202309,
        title: 'AI 多模態導覽員「璃兒」',
        category: 'project',
        link: 'ai-guide-liv3r',
    },
    // Awards
    {
        date: '2023.11',
        sortDate: 202311,
        title: '東海大數據競賽入圍決賽',
        category: 'award',
        description: '晶圓重工的影像辨識分類 — 準確率達 98%',
    },
    {
        date: '2024.01',
        sortDate: 202401,
        title: '教育大數據微學分成果展優等 —「生生有學伴」',
        category: 'award',
        description: '結合語音辨識與 Gemini 的 iOS 智慧捷徑，驗證對話式 AI 提升學習體驗的可行性。',
    },
    {
        date: '2024.05 - 2024.06',
        sortDate: 202405,
        title: '投稿第五屆台灣商業教育與管理研討會',
        category: 'award',
    },
    {
        date: '2024.06',
        sortDate: 202406,
        title: '學生聯合展覽競賽第三名 —「AI 導覽員」',
        category: 'award',
        description: '整合 Gemini 1.5、RAG、BERT 情緒分類及 Bert-VITS 2 語音合成。',
    },
    // Work at 文創技研
    {
        date: '2024.09 - 至今',
        sortDate: 202409,
        title: '文創技研有限公司 — 互動工程師',
        category: 'work',
        description: '主導燈會互動裝置、IoT 系統與智慧營運平台之開發。',
    },
    {
        date: '2024.11',
        sortDate: 202411,
        title: '東海大數據競賽入圍決賽',
        category: 'award',
        description: '晶圓劃痕的影像辨識分類 — 準確率達 99%',
    },
    {
        date: '2024.12 - 2025.02',
        sortDate: 202412,
        title: '中臺灣燈會影像辨識互動裝置',
        category: 'project',
        // link: 'lantern-festival-2024',
    },
    {
        date: '2025.03 - 2026.01',
        sortDate: 202503,
        title: '主導智慧營運平台開發',
        category: 'project',
        // link: 'smart-ops-platform',
    },
    {
        date: '2025.11 - now',
        sortDate: 202511,
        title: '整合 LoRaWAN 與 NB-IoT 之智慧風速監控與人群密度感測系統',
        category: 'project',
        link: 'crowd-density',
    },
    {
        date: '2025.11 - 2026.01',
        sortDate: 202511,
        title: '2026 元宵燈會民政局燈區互動裝置',
        category: 'project',
        // link: 'lantern-2026-interactive',
    },
    {
        date: '2025.12',
        sortDate: 202512,
        title: '受邀擔任台中教育大學企業講師',
        category: 'talk',
        description: '講題：N8N 與 MCP 實務應用（教育測驗統計研究所）',
    },
    {
        date: '2026.01 - 2026.02',
        sortDate: 202601,
        title: '展演自動化中央控制系統 "autoControl"',
        category: 'project',
        link: 'central-control-system',
    },
];

export const timeline: TimelineEntry[] = rawTimeline.map(entry => {
    if (entry.date.includes('now') || entry.date.includes('至今')) {
        const d = new Date();
        const yyyy_mm = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`;
        return { ...entry, date: entry.date.replace(/now|至今/g, yyyy_mm) };
    }
    return entry;
});
