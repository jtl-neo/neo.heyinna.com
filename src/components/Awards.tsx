export default function Awards() {
    const awards = [
        {
            date: '2024.11',
            title: '東海大數據競賽入圍決賽',
            desc: '晶圓劃痕的影像辨識分類 — 準確率達 99%',
        },
        {
            date: '2024.06',
            title: '學生聯合展覽競賽第三名',
            desc: '整合 Gemini 1.5、RAG、BERT 情緒分類及 Bert-VITS 2 語音合成，開發 AI 導覽員。',
        },
        {
            date: '2024.01',
            title: '教育大數據微學分成果展優等',
            desc: '「生生有學伴」— 結合語音辨識與 Gemini 的 iOS 智慧捷徑，驗證對話式 AI 學習體驗。',
        },
        {
            date: '2023.11',
            title: '東海大數據競賽入圍決賽',
            desc: '晶圓重工的影像辨識分類 — 準確率達 98%',
        },
    ];

    return (
        <section className="section" id="awards">
            <div className="container">
                <h2 className="section-title">競賽與成就</h2>
                <p className="section-subtitle">Competitions & Achievements</p>

                <div className="awards-grid">
                    {awards.map((award, i) => (
                        <div className="glass-card award-card" key={i}>
                            <div className="award-date">🏆 {award.date}</div>
                            <h3>{award.title}</h3>
                            <p className="award-desc">{award.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
