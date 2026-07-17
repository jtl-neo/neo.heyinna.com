import { useState } from 'react';
import { announcements, type Announcement } from '../data/announcements';

const typeConfig: Record<Announcement['type'], { icon: string; label: string }> = {
    info: { icon: 'ℹ️', label: '公告' },
    warning: { icon: '⚠️', label: '警告' },
    important: { icon: '📢', label: '重要聲明' },
};

export default function Announcements() {
    const visibleAnnouncements = announcements.filter((a) => a.visible);
    const [dismissed, setDismissed] = useState(false);

    if (visibleAnnouncements.length === 0 || dismissed) return null;

    return (
        <div className="announcement-overlay" id="announcements">
            <div className="announcement-overlay-backdrop" />
            <div className="announcement-overlay-scroll">
                <div className="announcement-overlay-content">
                    {visibleAnnouncements.map((announcement) => {
                        const config = typeConfig[announcement.type];
                        return (
                            <div
                                key={announcement.id}
                                className={`announcement-card announcement-${announcement.type}`}
                            >
                                <div className="announcement-header">
                                    <span className="announcement-icon">{config.icon}</span>
                                    <h2 className="announcement-title">{announcement.title}</h2>
                                    {announcement.date && (
                                        <span className="announcement-date">
                                            {announcement.date}
                                        </span>
                                    )}
                                </div>
                                <div className="announcement-body">
                                    {announcement.paragraphs.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                                {announcement.footerNote && (
                                    <div className="announcement-footer">
                                        {announcement.footerNote}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    <button
                        className="announcement-dismiss-btn"
                        onClick={() => setDismissed(true)}
                    >
                        我知道了
                    </button>
                </div>
            </div>
        </div>
    );
}
