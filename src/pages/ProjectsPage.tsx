import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Contact from '../components/Contact';

export default function ProjectsPage() {
    const [activeTag, setActiveTag] = useState('all');

    // Collect unique tags
    const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
    const topTags = allTags.slice(0, 12);

    const filtered =
        activeTag === 'all'
            ? projects
            : projects.filter((p) => p.tags.includes(activeTag));

    return (
        <>
            <div className="projects-page-header">
                <div className="container">
                    <h1 className="gradient-text">所有專案</h1>
                    <p>探索我參與過的技術專案與作品</p>
                </div>
            </div>

            <div className="container">
                <div className="projects-filter-bar">
                    <button
                        className={`timeline-filter-btn ${activeTag === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveTag('all')}
                    >
                        全部 ({projects.length})
                    </button>
                    {topTags.map((tag) => (
                        <button
                            key={tag}
                            className={`timeline-filter-btn ${activeTag === tag ? 'active' : ''}`}
                            onClick={() => setActiveTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="projects-gallery">
                    {filtered.map((project) => (
                        <Link
                            to={`/projects/${project.id}`}
                            key={project.id}
                            className="glass-card gallery-card"
                        >
                            {project.featured && (
                                <div className="featured-badge">⭐ Featured</div>
                            )}
                            <div className="gallery-card-period">{project.period}</div>
                            <h3>{project.title}</h3>
                            <div className="project-card-subtitle">{project.subtitle}</div>
                            <p>{project.summary}</p>
                            <div className="gallery-card-tags">
                                {project.tags.slice(0, 4).map((tag) => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                                {project.tags.length > 4 && (
                                    <span className="tag">+{project.tags.length - 4}</span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Contact />
        </>
    );
}
