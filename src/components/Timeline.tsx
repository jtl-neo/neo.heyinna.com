import { useState } from 'react';
import { Link } from 'react-router-dom';
import { timeline } from '../data/timeline';

const categories = [
    { key: 'all', label: '全部' },
    { key: 'work', label: '工作' },
    { key: 'education', label: '教育' },
    { key: 'project', label: '專案' },
    { key: 'award', label: '獲獎' },
    { key: 'talk', label: '演講' },
];

interface TimelineProps {
    limit?: number;
    showFilters?: boolean;
}

export default function Timeline({ limit, showFilters = true }: TimelineProps) {
    const [activeFilter, setActiveFilter] = useState('all');

    const sorted = [...timeline].sort((a, b) => b.sortDate - a.sortDate);
    const filtered =
        activeFilter === 'all'
            ? sorted
            : sorted.filter((t) => t.category === activeFilter);
    const items = limit ? filtered.slice(0, limit) : filtered;

    return (
        <section className="section" id="timeline">
            <div className="container">
                <h2 className="section-title">經歷時間軸</h2>
                <p className="section-subtitle">My Journey</p>

                {showFilters && (
                    <div className="timeline-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                className={`timeline-filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat.key)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                )}

                <div className="timeline-wrapper">
                    {items.map((item, i) => (
                        <div
                            key={`${item.sortDate}-${i}`}
                            className="timeline-item"
                            data-category={item.category}
                        >
                            <div className="timeline-dot"></div>
                            <span className={`timeline-category-badge ${item.category}`}>
                                {categories.find((c) => c.key === item.category)?.label}
                            </span>
                            <div className="timeline-date">{item.date}</div>
                            <div className="timeline-title">
                                {item.link ? (
                                    <Link to={`/projects/${item.link}`}>{item.title}</Link>
                                ) : (
                                    item.title
                                )}
                            </div>
                            {item.description && (
                                <div className="timeline-desc">{item.description}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
