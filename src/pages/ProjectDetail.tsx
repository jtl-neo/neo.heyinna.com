import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import type { ProjectLink } from '../data/projects';
import Contact from '../components/Contact';

const linkIcons: Record<ProjectLink['type'], string> = {
    github: '⟨/⟩',
    youtube: '▶',
    website: '🌐',
    demo: '🚀',
    paper: '📄',
    other: '🔗',
};

const linkLabels: Record<ProjectLink['type'], string> = {
    github: 'GitHub',
    youtube: 'YouTube',
    website: 'Website',
    demo: 'Live Demo',
    paper: 'Paper',
    other: 'Link',
};

const getYoutubeVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
};

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    const youtubeLinks = project.links?.filter(link => link.type === 'youtube') || [];

    type GalleryItem = {
        type: 'image' | 'youtube';
        src: string;
        videoId?: string;
        alt?: string;
        caption?: string;
    };

    const galleryItems: GalleryItem[] = [
        ...youtubeLinks.map(link => {
            const videoId = getYoutubeVideoId(link.url);
            return {
                type: 'youtube' as const,
                src: link.url,
                videoId: videoId || undefined,
                caption: link.label
            }
        }),
        ...(project.gallery || []).map(img => ({
            type: 'image' as const,
            src: img.src,
            alt: img.alt,
            caption: img.caption
        }))
    ];

    const hasGallery = galleryItems.length > 0;

    return (
        <>
            <div className="project-detail">
                <div className="container">
                    <Link to="/projects" className="project-detail-back">
                        ← 返回所有專案
                    </Link>

                    <div className="project-detail-header fade-in-up">
                        <h1>{project.title}</h1>
                        <div className="project-card-subtitle">{project.subtitle}</div>

                        <div className="project-detail-meta">
                            <div className="project-detail-meta-item">
                                <span className="project-detail-meta-label">角色</span>
                                <span className="project-detail-meta-value">{project.role}</span>
                            </div>
                            <div className="project-detail-meta-item">
                                <span className="project-detail-meta-label">時間</span>
                                <span className="project-detail-meta-value">{project.period}</span>
                            </div>
                        </div>

                        <div className="project-detail-tags">
                            {project.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>

                        {/* External Links */}
                        {project.links && project.links.length > 0 && (
                            <div className="project-links">
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`project-link-btn project-link-${link.type}`}
                                    >
                                        <span className="project-link-icon">{linkIcons[link.type]}</span>
                                        {link.label || linkLabels[link.type]}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Gallery */}
                    {hasGallery && (
                        <div className="project-gallery">
                            <h2>📸 專案圖庫 {galleryItems.length > 1 ? `(${galleryItems.length})` : ''}</h2>
                            <div className={`gallery-grid ${galleryItems.length > 1 ? 'gallery-grid-multi' : 'gallery-grid-single'}`}>
                                {galleryItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`gallery-item ${item.type === 'youtube' ? 'gallery-item-video' : ''} ${i === 0 && galleryItems.length > 2 ? 'gallery-item-featured' : ''}`}
                                        onClick={() => item.type === 'image' && setLightboxIndex(i)}
                                    >
                                        {item.type === 'youtube' && item.videoId ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${item.videoId}`}
                                                title={item.caption || "YouTube video player"}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                className="gallery-video-iframe"
                                            ></iframe>
                                        ) : (
                                            <img
                                                src={`${import.meta.env.BASE_URL}${item.src}`}
                                                alt={item.alt || item.caption || project.title}
                                                loading="lazy"
                                            />
                                        )}
                                        {item.caption && item.type === 'image' && (
                                            <div className="gallery-caption">{item.caption}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Lightbox */}
                    {lightboxIndex !== null && galleryItems[lightboxIndex]?.type === 'image' && (
                        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
                            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                                <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>✕</button>
                                <img
                                    src={`${import.meta.env.BASE_URL}${galleryItems[lightboxIndex].src}`}
                                    alt={galleryItems[lightboxIndex].alt || ''}
                                />
                                {galleryItems[lightboxIndex].caption && (
                                    <div className="lightbox-caption">
                                        {galleryItems[lightboxIndex].caption}
                                    </div>
                                )}
                                <div className="lightbox-nav">
                                    <button
                                        className="lightbox-nav-btn"
                                        disabled={lightboxIndex === 0 || galleryItems.slice(0, lightboxIndex).every(item => item.type !== 'image')}
                                        onClick={() => {
                                            let prev = lightboxIndex - 1;
                                            while (prev >= 0 && galleryItems[prev].type !== 'image') prev--;
                                            if (prev >= 0) setLightboxIndex(prev);
                                        }}
                                    >
                                        ←
                                    </button>
                                    <span className="lightbox-counter">
                                        {galleryItems.filter((_, idx) => idx <= lightboxIndex && galleryItems[idx].type === 'image').length}
                                        &nbsp;/&nbsp;
                                        {galleryItems.filter(item => item.type === 'image').length}
                                    </span>
                                    <button
                                        className="lightbox-nav-btn"
                                        disabled={lightboxIndex === galleryItems.length - 1 || galleryItems.slice(lightboxIndex + 1).every(item => item.type !== 'image')}
                                        onClick={() => {
                                            let next = lightboxIndex + 1;
                                            while (next < galleryItems.length && galleryItems[next].type !== 'image') next++;
                                            if (next < galleryItems.length) setLightboxIndex(next);
                                        }}
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="project-detail-body">
                        <div className="project-detail-main">
                            {project.description && (
                                <>
                                    <h2>專案概述</h2>
                                    <p>{project.description}</p>
                                </>
                            )}

                            {project.architecture && project.architecture.length > 0 && (
                                <>
                                    <h2>系統架構與實現</h2>
                                    {project.architecture.map((block) => (
                                        <div className="architecture-block" key={block.title}>
                                            <h3>🔧 {block.title}</h3>
                                            <p>{block.content}</p>
                                        </div>
                                    ))}
                                </>
                            )}

                            {project.challenges && project.challenges.length > 0 && (
                                <>
                                    <h2>核心挑戰與洞察</h2>
                                    {project.challenges.map((block) => (
                                        <div className="architecture-block" key={block.title}>
                                            <h3>💡 {block.title}</h3>
                                            <p>{block.content}</p>
                                        </div>
                                    ))}
                                </>
                            )}

                            {!project.description && !project.architecture && !project.challenges && (
                                <>
                                    <h2>專案概述</h2>
                                    <p>{project.summary}</p>
                                </>
                            )}
                        </div>

                        <aside className="project-detail-sidebar">
                            {project.results && project.results.length > 0 && (
                                <div className="glass-card">
                                    <h3>🎯 主要成果</h3>
                                    {project.results.map((result, i) => (
                                        <div className="result-item" key={i}>{result}</div>
                                    ))}
                                </div>
                            )}

                            {/* Sidebar links */}
                            {project.links && project.links.length > 0 && (
                                <div className="glass-card">
                                    <h3>🔗 相關連結</h3>
                                    <div className="sidebar-links">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="sidebar-link-item"
                                            >
                                                <span>{linkIcons[link.type]}</span>
                                                <span>{link.label || linkLabels[link.type]}</span>
                                                <span className="sidebar-link-arrow">↗</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="glass-card">
                                <h3>🛠️ 技術棧</h3>
                                <div className="skill-items">
                                    {project.tags.map((tag) => (
                                        <span className="skill-item" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <Contact />
        </>
    );
}
